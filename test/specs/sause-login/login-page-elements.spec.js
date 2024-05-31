import { assert } from 'chai'
import LoginPage from '../../pageobjects/LoginPage.js'
import Browser from '../../../framework/Browser.js'

describe('Test case 1', function () {
  it('Should verify page elements are present', async function () {
    await Browser.open(LoginPage.url)

    assert.isTrue(await LoginPage.isLogoDisplayed(), 'Element is not displayed.')
    assert.equal(await LoginPage.getLogoText(), 'Swag Labs', `Text doesn't match`)

    assert.isTrue(await LoginPage.loginForm.isUsernameFieldDisplayed(), 'Username field is not displayed.')
    assert.isTrue(await LoginPage.loginForm.isPasswordFieldDisplayed(), 'Password field is not displayed.')

    assert.isTrue(await LoginPage.loginForm.isLoginButtonDisplayed(), 'Login button is not displayed.')
    assert.isTrue(await LoginPage.loginForm.isLoginButtonEnabled(), 'Login button is disabled.')

    assert.isTrue(await LoginPage.isInfoBlockDisplayed(), 'Test login credentials are not displayed.')
  })
})
