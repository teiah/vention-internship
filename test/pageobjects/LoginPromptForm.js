import Button from '../../framework/elements/Button.js'

class LoginPrompt {
  constructor() {
    this.closeButton = new Button('Close button', '//button[contains(@class,"dismiss-btn")]')
  }

  async closeLoginPrompt() {
    await this.closeButton.waitForClickable()
    await this.closeButton.click()
  }
}
export default new LoginPrompt()
