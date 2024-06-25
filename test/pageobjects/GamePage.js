import Label from '../../framework/elements/Label.js'
import Button from '../../framework/elements/Button.js'
import NotificationBox from './NotificationBox.js'
import Statuses from '../constants/statuses.js'
import Battlefield from './Battlefield.js'
import CellActions from './CellActions.js'
import { browser } from '@wdio/globals'
import Logger from '../../framework/logger/Logger.js'

class GamePage {
  constructor() {
    this.url = 'https://battleship-game.org/zh'
    this.logo = new Label('Page logo', '//h1[@class="logo"]')
    this.playButton = new Button('Play button', '//div[@class="battlefield-start-button"]')
  }

  async isLogoDisplayed() {
    return this.logo.isDisplayed()
  }

  async getLogoText() {
    return this.logo.getText()
  }

  async startGame() {
    return this.playButton.click()
  }

  async play() {
    let gameStatus = await NotificationBox.getGameStatus()
    do {
      if (gameStatus === Statuses.YOUR_TURN || gameStatus === Statuses.START_YOUR_TURN) {
        // do {
        const battlefieldState = await Battlefield.getBattlefieldState()
        const { x, y } = CellActions.getBestCell(battlefieldState)
        await CellActions.attackCell(x, y)
        // eslint-disable-next-line wdio/no-pause
        // await browser.pause(500)
        // gameStatus = await NotificationBox.getGameStatus()
        // } while (gameStatus === Statuses.YOUR_TURN)
      }
      // eslint-disable-next-line wdio/no-pause
      await browser.pause(500)

      const newStatus = await NotificationBox.getGameStatus()
      if (newStatus !== gameStatus) {
        Logger.info('Status: ' + newStatus)
        gameStatus = newStatus
      }
    } while (
      gameStatus !== Statuses.GAME_WON &&
      gameStatus !== Statuses.GAME_LOST &&
      gameStatus !== Statuses.ERROR &&
      gameStatus !== Statuses.OPPONENT_LEFT_GAME
    )
    return gameStatus
  }

  async handleEndGame(gameStatus) {
    if (gameStatus === Statuses.OPPONENT_LEFT_GAME) {
      Logger.error('Game over. Opponent has left the game.')
    }
    if (gameStatus === Statuses.GAME_LOST) {
      Logger.error('Game over. You lose.')
    }
    if (gameStatus === Statuses.ERROR) {
      Logger.error('Unexpected error. Further play is impossible.')
    }
  }
}

export default new GamePage()
