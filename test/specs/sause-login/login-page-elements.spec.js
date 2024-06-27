import { assert } from 'chai'
import LoginPage from '../../pageobjects/LoginPage.js'
import Browser from '../../../framework/Browser.js'
import Logger from '../../../framework/logger/Logger.js'

describe('Test case 1', function () {
  it('Should verify page elements are present', async function () {
    Logger.logStep('Open login page')
    await Browser.open(LoginPage.url)

    Logger.logStep('Check if logo is displayed')
    assert.isTrue(await LoginPage.isLogoDisplayed(), 'Element is not displayed.')
    assert.equal(await LoginPage.getLogoText(), 'Swag Labs', `Text doesn't match`)

    Logger.logStep('Check if username and password fields are displayed')
    assert.isTrue(await LoginPage.loginForm.isUsernameFieldDisplayed(), 'Username field is not displayed.')
    assert.isTrue(await LoginPage.loginForm.isPasswordFieldDisplayed(), 'Password field is not displayed.')

    Logger.logStep('Check if login button is displayed and enabled.')
    assert.isTrue(await LoginPage.loginForm.isLoginButtonDisplayed(), 'Login button is not displayed.')
    assert.isTrue(await LoginPage.loginForm.isLoginButtonEnabled(), 'Login button is disabled.')

    Logger.logStep('Check if info block is displayed')
    assert.isTrue(await LoginPage.isInfoBlockDisplayed(), 'Test login credentials are not displayed.')
  })
})
