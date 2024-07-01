import Label from '../../framework/elements/Label.js'
import Button from '../../framework/elements/Button.js'

class GamePage {
  constructor() {
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
}

export default new GamePage()
