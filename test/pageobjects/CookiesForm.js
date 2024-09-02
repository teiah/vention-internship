import Button from '../../framework/elements/Button.js'

class CookiesForm {
  constructor() {
    this.acceptButton = new Button('Accept cookies button', '//button[contains(@class,"js-accept")]')
  }

  async acceptCookies() {
    await this.acceptButton.waitForClickable()
    await this.acceptButton.click()
  }
}

export default new CookiesForm()
