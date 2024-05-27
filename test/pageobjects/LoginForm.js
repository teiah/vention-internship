import TextBox from '../../framework/elements/TextBox.js'
import Button from '../../framework/elements/Button.js'
import BaseForm from '../../framework/BaseForm.js'
import Label from '../../framework/elements/Label.js'

class LoginForm extends BaseForm {
  constructor() {
    super('loginForm', '//id="login-form-container"')
    this.usernameField = new TextBox('Username field', '//input[@data-test="username"]')
    this.passwordField = new TextBox('Password field', '//input[@data-test="password"]')
    this.loginButton = new Button('Login button', '//input[@data-test="login-button"]')
    this.errorMessage = new Label('Error message', '//h3[@data-test="error"]')
    this.usernameIcon = new Label('Username icon', '//input[@data-test="username"]/following-sibling::*[contains(@class, "error_icon")]')
    this.passwordIcon = new Label('Password icon', '//input[@data-test="password"]/following-sibling::*[contains(@class, "error_icon")]')
    this.errorCloseButton = new Button('Error button', '//button[@class="error-button"]')
  }

  async login(username, password) {
    await this.usernameField.setText(username)
    await this.passwordField.setText(password)
    await this.loginButton.click()
  }

  async isUsernameFieldDisplayed() {
    return this.usernameField.isDisplayed()
  }

  async isPasswordFieldDisplayed() {
    return this.passwordField.isDisplayed()
  }

  async isLoginButtonDisplayed() {
    return this.loginButton.isDisplayed()
  }

  async isLoginButtonEnabled() {
    return this.loginButton.isEnabled()
  }

  async getLoginButtonColor() {
    return this.loginButton.getCssProperty('background-color')
  }

  async getLoginButtonText() {
    return this.loginButton.getValue()
  }

  async clickLoginButton() {
    await this.loginButton.click()
  }

  async getUsernamePlaceholder() {
    return this.usernameField.getAttribute('placeholder')
  }

  async getPasswordPlaceholder() {
    return this.passwordField.getAttribute('placeholder')
  }

  async errorMessageIsDisplayed(timeout) {
    return this.errorMessage.isDisplayed(timeout)
  }

  async usernameIconIsDisplayed(timeout) {
    return this.usernameIcon.isDisplayed(timeout)
  }

  async passwordIconIsDisplayed(timeout) {
    return this.passwordIcon.isDisplayed(timeout)
  }

  async closeErrorMessage() {
    await this.errorCloseButton.click()
  }

  async usernameIconIsExisting() {
    return this.usernameIcon.isExisting()
  }

  async passwordIconIsExisting() {
    return this.passwordIcon.isExisting()
  }
}
export default LoginForm
