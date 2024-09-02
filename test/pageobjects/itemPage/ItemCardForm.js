import Label from '../../../framework/elements/Label.js'

class ItemCardForm {
  constructor() {
    this.cardLabel = new Label('Card', '//div[@id="card_grid"]//div[contains(@class,"card-item")]')
    this.productLink = new Label('Product link', '//a[@data-zone="title"]')
    this.priceBox = new Label('Price box', '(//div[@id="card_grid"]//div[@class="card-v2-pricing"])')
  }

  async getProductTitle() {
    return this.productLink.getText()
  }

  async getNumberOfCards() {
    const elements = await this.cardLabel.getElements()
    return elements.length
  }

  async getNumberOfPriceBoxes() {
    const elements = await this.priceBox.getElements()
    return elements.length
  }
}

export default new ItemCardForm()
