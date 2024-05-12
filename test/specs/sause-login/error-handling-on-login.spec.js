import { assert } from 'chai'

describe('Test case 3', function () {
  it('Should verify error handling on login', async function () {
    // Open https://www.saucedemo.com/.
    await browser.url('https://www.saucedemo.com/')

    // Click the "Login" button without entering credentials.
    await $('//input[@data-test="login-button"]').click()

    // Verify the error message is displayed.
    const errorMessage = await $('//h3[@data-test="error"]')
    assert.isTrue(await errorMessage.isDisplayed())

    // Confirm that the username and password fields display error icons.
    const usernameIcon = await $('//input[@data-test="username"]/following-sibling::*[contains(@class, "error_icon")]')
    assert.isTrue(await usernameIcon.isDisplayed(), 'Username error icon should be dispayed.')
    const passwordIcon = await $('//input[@data-test="password"]/following-sibling::*[contains(@class, "error_icon")]')
    assert.isTrue(await passwordIcon.isDisplayed(), 'Password error icon should be dispayed.')

    // Close the error message.
    await $('//button[@class="error-button"]').click()

    // Ensure the error icons are removed from the username and password fields.
    assert.isFalse(await usernameIcon.isExisting(), 'Username icon should not be on the page.')
    assert.isFalse(await passwordIcon.isExisting(), 'Password icon should not be on the page.')
  })
})
