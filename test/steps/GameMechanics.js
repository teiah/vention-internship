import Statuses from '../constants/statuses.js'
import NotificationBox from '../pageobjects/NotificationBox.js'
import Logger from '../../framework/logger/Logger.js'
import States from '../constants/states.js'
import { browser } from '@wdio/globals'
import AttackStrategy from './AttackStrategy.js'

class GameMechanics {
  async getGameStatus() {
    const status = await NotificationBox.getNotificationText()
    switch (status) {
      case 'The game started, your turn.':
        return Statuses.START_YOUR_TURN
      case 'Your turn.':
        return Statuses.YOUR_TURN
      case 'Waiting for opponent.':
        return Statuses.WAIT_FOR_OPPONENT
      case "The game began, opponent's turn.":
        return Statuses.START_OPPONENT_TURN
      case "Opponent's turn, please wait.":
        return Statuses.OPPONENT_TURN
      case 'Your opponent has left the game.':
        return Statuses.OPPONENT_LEFT_GAME
      case 'Game over. Congratulations, you won!':
        return Statuses.GAME_WON
      case 'Game over. You lose.':
        return Statuses.GAME_LOST
      case 'Unexpected error. Further play is impossible.':
        return Statuses.ERROR
      case 'Connecting to server.':
        return Statuses.CONNECTING
    }
  }

  formatBattlefield(battlefield) {
    return battlefield
      .map((row) =>
        row
          .map((cellState) => {
            if (cellState === States.EMPTY) {
              return '.'
            } else if (cellState === States.MISS) {
              return 'O'
            } else if (cellState === States.HIT) {
              return 'X'
            }
          })
          .join(' '),
      )
      .join('\n')
  }

  async play() {
    let gameStatus = await this.getGameStatus()
    do {
      if (gameStatus === Statuses.YOUR_TURN || gameStatus === Statuses.START_YOUR_TURN) {
        const battlefieldState = await AttackStrategy.getBattlefieldState()
        const { x, y } = AttackStrategy.getBestCell(battlefieldState)
        await AttackStrategy.attackCell(x, y)
      }
      // eslint-disable-next-line wdio/no-pause
      await browser.pause(500)

      const newStatus = await this.getGameStatus()
      if (newStatus !== gameStatus) {
        Logger.info('Game status: ' + newStatus)
        gameStatus = newStatus
      }
    } while (
      gameStatus !== Statuses.GAME_WON &&
      gameStatus !== Statuses.GAME_LOST &&
      gameStatus !== Statuses.ERROR &&
      gameStatus !== Statuses.OPPONENT_LEFT_GAME
    )
    return this.handleEndGame(gameStatus)
  }

  async handleEndGame(gameStatus) {
    if (gameStatus !== Statuses.GAME_WON) {
      Logger.error(gameStatus)
    }
    return gameStatus
  }
}
export default new GameMechanics()
