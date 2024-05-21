import { assert } from 'chai'

describe('Test case 1', function () {
  it('Should verify page elements are present', async function () {
    // Open https://www.saucedemo.com/.
    const url = 'https://www.saucedemo.com/'
    await browser.url(url)

    // Confirm the login page is opened.
    assert.equal(await browser.getUrl(), url, 'URL is not as expected')

    // Verify the presence of "Swag Labs" text on the page.
    const pageLogo = await $('//div[@class="login_logo"]')
    assert.isTrue(await pageLogo.isDisplayed(), 'Element is not displayed.')
    const expectedText = 'Swag Labs'
    const logoText = await pageLogo.getText()
    assert.equal(logoText, expectedText, `Logo text should be ${expectedText}.`)

    // Check the username and password fields are present.
    const usernameField = await $('//input[@data-test="username"]')
    assert.isTrue(await usernameField.isDisplayed(), 'Username field is not displayed.')

    const passwordField = await $('//input[@data-test="password"]')
    assert.isTrue(await passwordField.isDisplayed(), 'Password field is not displayed.')

    // Confirm the "Login" button is present and enabled.
    const loginButton = await $('//input[@data-test="login-button"]')
    assert.isTrue(await loginButton.isDisplayed(), 'Login button is not displayed.')
    assert.isTrue(await loginButton.isEnabled(), 'Login button is disabled.')

    // Ensure the credentials info block is displayed.
    const infoBlock = await $('//div[@class="login_credentials_wrap-inner"]')
    assert.isTrue(await infoBlock.isDisplayed(), 'Test login credentials are not displayed.')
  })
})
