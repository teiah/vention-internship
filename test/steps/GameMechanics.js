import Statuses from '../constants/statuses.js'
import NotificationBox from '../pageobjects/NotificationBoxForm.js'
import Logger from '../../framework/logger/Logger.js'
import States from '../constants/states.js'
import { browser } from '@wdio/globals'
import AttackStrategy from './AttackStrategy.js'
import BattlefieldForm from '../pageobjects/BattlefieldForm.js'

class GameMechanics {
  async getGameStatus() {
    return NotificationBox.getNotificationText()
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
        await BattlefieldForm.attackCell(y, x)
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
