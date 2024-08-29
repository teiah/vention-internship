import ItemCardForm from './ItemCardForm.js'
import Label from '../../../framework/elements/Label.js'

class PriceCardForm {
  constructor(index) {
    this.index = index
    this.rrpPriceLabel = new Label('RRP Price', this.getRrpPriceLocator())
    this.newPriceLabel = new Label('New Price', this.getNewPriceLocator())
  }

  getRrpPriceLocator() {
    return ItemCardForm.cardLabel.selector + `[${this.index + 1}]//div[@class="card-v2-pricing"]/*[1]`
  }

  getNewPriceLocator() {
    return ItemCardForm.cardLabel.selector + `[${this.index + 1}]//div[@class="card-v2-pricing"]/*[2]`
  }

  async getRrpPrice() {
    return this.rrpPriceLabel.getText()
  }

  async getNewPrice() {
    return this.newPriceLabel.getText()
  }
}

export default PriceCardForm
