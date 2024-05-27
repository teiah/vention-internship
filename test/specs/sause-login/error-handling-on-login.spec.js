import { assert } from 'chai'
import LoginPage from '../../pageobjects/LoginPage.js'

describe('Test case 3', function () {
  it('Should verify error handling on login', async function () {
    await LoginPage.openLoginPage()

    // Click the "Login" button without entering credentials.
    await LoginPage.loginForm.clickLoginButton()

    // Verify the error message is displayed.
    assert.isTrue(await LoginPage.loginForm.errorMessageIsDisplayed(), 'Error message is not displayed.')

    // Confirm that the username and password fields display error icons.
    assert.isTrue(await LoginPage.loginForm.usernameIconIsDisplayed(), 'Username error icon should be displayed.')
    assert.isTrue(await LoginPage.loginForm.passwordIconIsDisplayed(), 'Password error icon should be displayed.')

    // Close the error message.
    await LoginPage.loginForm.closeErrorMessage()

    // Ensure the error icons are removed from the username and password fields.
    assert.isFalse(await LoginPage.loginForm.usernameIconIsExisting(), 'Username icon should not be on the page.')
    assert.isFalse(await LoginPage.loginForm.passwordIconIsExisting(), 'Password icon should not be on the page.')
  })
})
