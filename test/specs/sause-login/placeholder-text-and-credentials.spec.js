import { assert } from 'chai'
import Colors from '../../constants/colors.js'
import LoginPage from '../../pageobjects/LoginPage.js'
import Browser from '../../../framework/Browser.js'

describe('Test case 2', function () {
  it('Should verify placeholder text and credentials', async function () {
    await Browser.open(LoginPage.url)

    // Verify the placeholder text for the username field is "Username".
    assert.equal(await LoginPage.loginForm.getUsernamePlaceholder(), 'Username', 'Placeholder should be "Username".')

    // Confirm the placeholder text for the password field is "Password".
    assert.equal(await LoginPage.loginForm.getPasswordPlaceholder(), 'Password', 'Placeholder should be "Password".')

    // Check the text on the "Login" button is "Login".
    assert.equal(await LoginPage.loginForm.getLoginButtonText(), 'Login', 'Button text should be "Login".')

    // Verify the color of the "Login" button is green (#3ddc91).
    const loginButtonColor = await LoginPage.loginForm.getLoginButtonColor()
    const actualColor = loginButtonColor.parsed.hex
    assert.equal(actualColor, Colors.GREEN, "Button color doesn't match.")

    /* Validate the list of usernames contains:
    standard_user
    locked_out_user
    problem_user
    performance_glitch_user
    error_user
    visual_user*/

    const expectedUsernames = ['standard_user', 'locked_out_user', 'problem_user', 'performance_glitch_user', 'error_user', 'visual_user']
    const usernamesText = await LoginPage.getAcceptedUsernamesText()
    const displayedUsernames = usernamesText.split('\n')
    expectedUsernames.forEach((expectedUsername) => {
      assert.include(displayedUsernames, expectedUsername, `Expected username '${expectedUsername}' is missing`)
    })

    // Confirm the password for all users is "secret_sauce".
    const expectedPassword = 'secret_sauce'
    const passwordText = await LoginPage.getAcceptedPasswordText()
    const colonIndex = passwordText.indexOf(':')
    const actualPassword = passwordText.slice(colonIndex + 1).trim()
    assert.equal(actualPassword, expectedPassword, `Expected password to be ${expectedPassword}`)
  })
})
