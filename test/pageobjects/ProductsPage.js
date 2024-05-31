import Label from '../../framework/elements/Label.js'

class ProductsPage {
  constructor() {
    this.products = new Label('Products title', '//span[@class="title" and text()="Products"]')
  }

  async isProductsTitleDisplayed() {
    return this.products.isDisplayed()
  }
}
export default new ProductsPage()
