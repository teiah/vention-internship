import { assert } from 'chai'
import LoginPage from '../../pageobjects/LoginPage.js'
import Browser from '../../../framework/Browser.js'
import Logger from '../../../framework/logger/Logger.js'

describe('Test case 3', function () {
  it('Should verify error handling on login', async function () {
    Logger.trace('Open login page')
    await Browser.open(LoginPage.url)

    Logger.trace('Click login button')
    await LoginPage.loginForm.clickLoginButton()

    Logger.trace('Check if login error message is displayed')
    assert.isTrue(await LoginPage.loginForm.isErrorMessageDisplayed(), 'Error message is not displayed.')

    Logger.trace('Check if username and password fields display error icons')
    assert.isTrue(await LoginPage.loginForm.isUsernameErrorIconDisplayed(), 'Username error icon should be displayed.')
    assert.isTrue(await LoginPage.loginForm.isPasswordErrorIconDisplayed(), 'Password error icon should be displayed.')

    Logger.trace('Close error message')
    await LoginPage.loginForm.closeErrorMessage()

    Logger.trace('Check if username and password error icons are not displayed anymore')
    assert.isFalse(await LoginPage.loginForm.isUsernameErrorIconExisting(), 'Username icon should not be on the page.')
    assert.isFalse(await LoginPage.loginForm.isPasswordErrorIconExisting(), 'Password icon should not be on the page.')
  })
})
