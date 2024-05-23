import { assert } from 'chai'
import { $, browser } from '@wdio/globals'

describe('Test case 4', function () {
  it('Should log in successfully', async function () {
    // Open https://www.saucedemo.com/.
    await browser.url('https://www.saucedemo.com/')

    await login('performance_glitch_user', 'secret_sauce')

    // The product page is opened after successful login with valid credentials.
    const elementProducts = await $('//span[@class="title" and text()="Products"]')
    assert.isTrue(await elementProducts.isDisplayed(), 'Product page did not open successfully.')
  })

  async function login(username, password) {
    // Type the username into the username field.
    const usernameField = await $('//input[@data-test="username"]')

    await usernameField.setValue(username)

    // Type the password into the password field.
    const passwordField = await $('//input[@data-test="password"]')
    await passwordField.setValue(password)

    // Click the login button.
    const loginButton = await $('//input[@data-test="login-button"]')
    await loginButton.click()
  }
})
