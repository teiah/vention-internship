import Label from '../../framework/elements/Label.js'
import Button from '../../framework/elements/Button.js'
import Statuses from '../constants/statuses.js'
import Timeouts from '../constants/timeouts.js'
import Browser from '../../framework/Browser.js'

class NotificationBox {
  constructor() {
    this.notificationMessage = new Label('Notification message', '.notifications .notification:not(.none) .notification-message')
    this.restartButton = new Button('Restart game button', '//div[@class="notification-submit restart"]')
    this.field = new Label('Notification field', 'div[class*="notification "]')
  }

  async isNotificationTextDisplayed() {
    return this.notificationMessage.isDisplayed()
  }

  async isRestartButtonDisplayed() {
    return this.restartButton.isDisplayed()
  }

  async getButtonText() {
    return this.restartButton.getText()
  }

  async getNotificationColor() {
    return this.field.getCssProperty('background-color')
  }

  async getNotificationText() {
    return this.notificationMessage.getText()
  }

  async getNotificationTextWithoutLog() {
    return this.notificationMessage.getText(false)
  }

  async getGameStatus() {
    const status = await this.getNotificationTextWithoutLog()
    switch (status) {
      case 'The game started, your turn.':
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

  async waitForGameStatusChange(oldText, timeout = Timeouts.LONG_TIMEOUT, interval = Timeouts.EXTRA_SHORT_TIMEOUT) {
    await Browser.waitUntil(
      async () => {
        const newText = await this.getNotificationTextWithoutLog()
        return newText !== oldText
      },
      {
        timeout,
        timeoutMsg: 'The game status did not change within the timeout period',
        interval,
      },
    )
  }
}

export default new NotificationBox()
