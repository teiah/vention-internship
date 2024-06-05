import { assert } from 'chai'
import LoginPage from '../../pageobjects/LoginPage.js'
import Browser from '../../../framework/Browser.js'

describe('Test case 3', function () {
  it('Should verify error handling on login', async function () {
    await Browser.open(LoginPage.url)

    // Click the "Login" button without entering credentials.
    await LoginPage.loginForm.clickLoginButton()

    // Verify the error message is displayed.
    assert.isTrue(await LoginPage.loginForm.isErrorMessageDisplayed(), 'Error message is not displayed.')

    // Confirm that the username and password fields display error icons.
    assert.isTrue(await LoginPage.loginForm.isUsernameErrorIconDisplayed(), 'Username error icon should be displayed.')
    assert.isTrue(await LoginPage.loginForm.isPasswordErrorIconDisplayed(), 'Password error icon should be displayed.')

    // Close the error message.
    await LoginPage.loginForm.closeErrorMessage()

    // Ensure the error icons are removed from the username and password fields.
    assert.isFalse(await LoginPage.loginForm.isUsernameErrorIconExisting(), 'Username icon should not be on the page.')
    assert.isFalse(await LoginPage.loginForm.isPasswordErrorIconExisting(), 'Password icon should not be on the page.')
  })
})
