import { assert } from 'chai'
import LoginPage from '../../pageobjects/LoginPage.js'
import ProductsPage from '../../pageobjects/ProductsPage.js'
import Browser from '../../../framework/Browser.js'
import Logger from '../../../framework/logger/Logger.js'

describe('Test case 4', function () {
  it('Should log in successfully', async function () {
    Logger.trace('Open login page')
    await Browser.open(LoginPage.url)
    Logger.trace('Log in')
    await LoginPage.loginForm.login('performance_glitch_user', 'secret_sauce')

    Logger.trace('Check the product page is opened')
    assert.isTrue(await ProductsPage.isProductsTitleDisplayed(), 'Product page did not open successfully.')
  })
})
