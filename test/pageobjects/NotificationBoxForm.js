import Label from '../../framework/elements/Label.js'
import Button from '../../framework/elements/Button.js'

class NotificationBoxForm {
  constructor() {
    this.notificationMessage = new Label('Notification message', '.notifications .notification:not(.none) .notification-message')
    this.restartButton = new Button('Restart game button', '//div[@class="notification-submit restart"]')
    this.fieldLabel = new Label('Notification field', 'div[class*="notification "]')
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
    return this.fieldLabel.getCssProperty('background-color')
  }

  async getNotificationText() {
    return this.notificationMessage.getText()
  }
}

export default new NotificationBoxForm()
