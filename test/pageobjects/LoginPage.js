import Label from '../../framework/elements/Label.js'
import LoginForm from './LoginForm.js'

class LoginPage {
  constructor() {
    this.url = 'https://www.saucedemo.com/'
    this.logo = new Label('Page logo', '//div[@class="login_logo"]')
    this.loginForm = new LoginForm()
    this.infoBlock = new Label('Info block', '//div[@class="login_credentials_wrap-inner"]')
    this.acceptedUsernames = new Label('Accepted usernames', '//div[@data-test="login-credentials"]')
    this.acceptedPassword = new Label('Accepted password', '//div[@class="login_password"]')
  }

  async isLogoDisplayed() {
    return this.logo.isDisplayed()
  }

  async getLogoText() {
    return this.logo.getText()
  }

  async isInfoBlockDisplayed() {
    return this.infoBlock.isDisplayed()
  }

  async getAcceptedUsernamesText() {
    return this.acceptedUsernames.getText()
  }

  async getAcceptedPasswordText() {
    return this.acceptedPassword.getText()
  }
}
export default new LoginPage()
