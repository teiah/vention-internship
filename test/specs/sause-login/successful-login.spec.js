import { assert } from 'chai'
import LoginPage from '../../pageobjects/LoginPage.js'
import ProductsPage from '../../pageobjects/ProductsPage.js'
import Browser from '../../../framework/Browser.js'

describe('Test case 4', function () {
  it('Should log in successfully', async function () {
    await Browser.open(LoginPage.url)
    await LoginPage.loginForm.login('performance_glitch_user', 'secret_sauce')

    // The product page is opened after successful login with valid credentials.
    assert.isTrue(await ProductsPage.isProductsTitleDisplayed(), 'Product page did not open successfully.')
  })
})
