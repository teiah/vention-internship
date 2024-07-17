import Label from '../../framework/elements/Label.js'
import { $ } from '@wdio/globals'

class PriceCardForm {
  constructor() {
    this.priceBox = new Label('Price box', '(//div[@id="card_grid"]//div[@class="card-v2-pricing"])')
  }

  async getAllPriceBoxes() {
    return this.priceBox.getElements()
  }

  async getAllPrices() {
    const priceElements = await this.getAllPriceBoxes()
    const prices = []
    for (let i = 0; i < priceElements.length - 1; i++) {
      const xpath = priceElements[i].selector + `[${i + 1}]/*[1]`
      const rrpPrice = await $(xpath).getText()

      const newPrice = await $(priceElements[i].selector + `[${i + 1}]/*[2]`).getText()

      const parsedRrpPrice = this._parsePrice(rrpPrice)
      const parsedNewPrice = this._parsePrice(newPrice)

      prices.push(isNaN(parsedRrpPrice) ? parsedNewPrice : parsedRrpPrice)
    }
    return prices
  }

  _parsePrice(string) {
    return parseFloat(
      string
        .replace(/^\s*от\s*/, '')
        .replace(/^\s*НОВО\s*/, '')
        .replace(/\./g, '')
        .replace(/,/, '.'),
    )
  }
}

export default new PriceCardForm()
