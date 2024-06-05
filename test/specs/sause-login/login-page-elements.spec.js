import { assert } from 'chai'
import LoginPage from '../../pageobjects/LoginPage.js'
import Browser from '../../../framework/Browser.js'
import Logger from '../../../framework/logger/Logger.js'

describe('Test case 1', function () {
  it('Should verify page elements are present', async function () {
    Logger.trace('Open login page')
    await Browser.open(LoginPage.url)

    Logger.trace('Check if logo is displayed')
    assert.isTrue(await LoginPage.isLogoDisplayed(), 'Element is not displayed.')
    assert.equal(await LoginPage.getLogoText(), 'Swag Labs', `Text doesn't match`)

    Logger.trace('Check if username and password fields are displayed')
    assert.isTrue(await LoginPage.loginForm.isUsernameFieldDisplayed(), 'Username field is not displayed.')
    assert.isTrue(await LoginPage.loginForm.isPasswordFieldDisplayed(), 'Password field is not displayed.')

    Logger.trace('Check if login button is displayed and enabled.')
    assert.isTrue(await LoginPage.loginForm.isLoginButtonDisplayed(), 'Login button is not displayed.')
    assert.isTrue(await LoginPage.loginForm.isLoginButtonEnabled(), 'Login button is disabled.')

    Logger.trace('Check if info block is displayed')
    assert.isTrue(await LoginPage.isInfoBlockDisplayed(), 'Test login credentials are not displayed.')
  })
})
