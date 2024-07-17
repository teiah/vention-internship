import Label from '../../../framework/elements/Label.js'

class ItemCardForm {
  constructor() {
    this.cardLabel = new Label('Card', '//div[@id="card_grid"]//div[contains(@class,"card-item")]')
    this.productLink = new Label('Product link', '//a[@data-zone="title"]')
  }

  async getAllProductTitles() {
    const elements = await this.productLink.getElements()
    const titles = []
    for (const element of elements) {
      const title = await element.getText()
      titles.push(title)
    }
    return titles
  }
}

export default new ItemCardForm()
