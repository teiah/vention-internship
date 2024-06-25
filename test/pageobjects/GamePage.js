import Label from '../../framework/elements/Label.js'
import Button from '../../framework/elements/Button.js'
import NotificationBox from './NotificationBox.js'
import Statuses from '../constants/statuses.js'
import Battlefield from './Battlefield.js'
import CellActions from './CellActions.js'

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
    let gameStatus
    do {
      gameStatus = await NotificationBox.getGameStatus()
      if (gameStatus === Statuses.YOUR_TURN || gameStatus === Statuses.START_YOUR_TURN) {
        do {
          const battlefieldState = await Battlefield.getBattlefieldState()
          const { x, y } = CellActions.getBestCell(battlefieldState)
          await CellActions.attackCell(x, y)
          gameStatus = await NotificationBox.getGameStatus()
        } while (gameStatus === Statuses.YOUR_TURN)
      }
      await NotificationBox.waitForGameStatusChange(gameStatus)
    } while (gameStatus !== Statuses.GAME_WON || gameStatus !== Statuses.ERROR || gameStatus !== Statuses.GAME_LOST)
  }
}

export default new GamePage()
