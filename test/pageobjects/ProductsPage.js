import Label from '../../framework/elements/Label.js'
import Browser from '../../framework/Browser.js'

class ProductsPage {
  constructor() {
    this.products = new Label('Products title', '//span[@class="title" and text()="Products"]')
  }

  async openLoginPage() {
    await new Browser().open('https://www.saucedemo.com/inventory.html')
  }

  async isProductsTitleDisplayed() {
    return this.products.isDisplayed()
  }
}
export default new ProductsPage()
