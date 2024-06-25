import Label from '../../framework/elements/Label.js'
import Button from '../../framework/elements/Button.js'
import States from '../constants/states.js'

class NotificationBox {
  constructor() {
    this.notificationMessage = new Label('Notification message', '.notifications .notification:not(.none) .notification-message')
    this.restartButton = new Button('Restart game button', '//div[@class="notification-submit restart"]')
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

  async getNotificationTextWithoutLog() {
    return this.notificationMessage.getText(false)
  }

  async getNotificationText() {
    return this.notificationMessage.getText()
  }

  async checkGameStatus() {
    const status = await this.getNotificationText()
    switch (status) {
      case 'The game started, your turn.':
      case 'Your turn.':
        return States.YOUR_TURN
      case 'Waiting for opponent.':
        return States.WAIT_FOR_OPPONENT
      case "The game began, opponent's turn.":
        return States.START_OPPONENT_TURN
      case "Opponent's turn, please wait.":
        return States.OPPONENT_TURN
      case 'Your opponent has left the game.':
        return States.OPPONENT_LEFT_GAME
      case 'Game over. Congratulations, you won!':
        return States.GAME_WON
      case 'Game over. You lose.':
        return States.GAME_LOST
      case 'Unexpected error. Further play is impossible.':
        return States.ERROR
      case 'Connecting to server.':
        return States.CONNECTING
    }
  }
}

export default new NotificationBox()
