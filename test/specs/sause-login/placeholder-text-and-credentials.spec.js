import { assert } from 'chai'
import Colors from '../../../constants/colors.js'

describe('Test case 2', function () {
  it('Should verify placeholder text and credentials', async function () {
    // Open https://www.saucedemo.com/.
    const url = 'https://www.saucedemo.com/'
    await browser.url(url)

    // Confirm the login page is opened.
    assert.equal(await browser.getUrl(), url, 'URL is not as expected.')

    // Verify the placeholder text for the username field is "Username".
    const username = await $('//input[@data-test="username"]')
    const usernamePlaceholder = await username.getAttribute('placeholder')
    assert.equal(usernamePlaceholder, 'Username', 'Placeholder should be "Username".')

    // Confirm the placeholder text for the password field is "Password".
    const password = await $('//input[@data-test="password"]')
    const passwordPlaceholderText = await password.getAttribute('placeholder')
    assert.equal(passwordPlaceholderText, 'Password', 'Placeholder should be "Password".')

    // Check the text on the "Login" button is "Login".
    const loginButton = await $('//input[@data-test="login-button"]')
    const loginButtonText = await loginButton.getValue()
    assert.equal(loginButtonText, 'Login', 'Button text should be "Login".')

    // Verify the color of the "Login" button is green (#3ddc91).
    const color = await loginButton.getCSSProperty('background-color')
    const actualColor = color.parsed.hex
    assert.equal(actualColor, Colors.BUTTON_BACKGROUND, "Button color doesn't match.")

    /* Validate the list of usernames contains:
    standard_user
    locked_out_user
    problem_user
    performance_glitch_user
    error_user
    visual_user*/

    const expectedUsernames = ['standard_user', 'locked_out_user', 'problem_user', 'performance_glitch_user', 'error_user', 'visual_user']
    const usernamesText = await $('//div[@data-test="login-credentials"]').getText()
    const displayedUsernames = usernamesText.split('\n')
    expectedUsernames.forEach((expectedUsername) => {
      assert.include(displayedUsernames, expectedUsername, `Expected username '${expectedUsername}' is missing`)
    })

    // Confirm the password for all users is "secret_sauce".
    const expectedPassword = 'secret_sauce'
    const passwordText = await $('//div[@class="login_password"]').getText()
    const colonIndex = passwordText.indexOf(':')
    const actualPassword = passwordText.slice(colonIndex + 1).trim()
    assert.equal(actualPassword, expectedPassword, `Expected password to be ${expectedPassword}`)
  })
})
