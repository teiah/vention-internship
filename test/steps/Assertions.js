import ItemCardForm from '../pageobjects/itemPage/ItemCardForm.js'
import { assert } from 'chai'
import ItemGroupPage from '../pageobjects/itemPage/ItemGroupPage.js'
import PriceCardForm from '../pageobjects/itemPage/PriceCardForm.js'

class Assertions {
  async assertProductTitlesIncludeManufacturer(manufacturer, numPages = 1) {
    const assertOnCurrentPage = async () => {
      const numberOfItems = await ItemCardForm.getNumberOfCards()
      for (let i = 0; i < numberOfItems; i++) {
        const title = await ItemCardForm.getProductTitle()
        assert.include(title.toLowerCase(), manufacturer.toLowerCase(), `The title does not include ${manufacturer}.`)
      }
    }
    // Loop through specified number of pages
    for (let i = 0; i < numPages; i++) {
      await assertOnCurrentPage()

      // Navigate to the next page if there are more pages to check
      if (i < numPages - 1) {
        const currentPageNumber = await ItemGroupPage.getCurrentPageNumber()
        const nextPageNumber = parseInt(currentPageNumber, 10) + 1
        await ItemGroupPage.clickPageNumber(nextPageNumber)
      }
    }
  }

  async getAllPrices() {
    const priceElements = await ItemCardForm.getNumberOfPriceBoxes()
    const prices = []
    for (let i = 0; i < priceElements - 1; i++) {
      const priceBox = new PriceCardForm(i)
      let rrpPrice = await priceBox.getRrpPrice()
      const newPrice = await priceBox.getNewPrice()

      //additional logic for discounted products with their price as <s>
      if (/^\d/.test(rrpPrice)) {
        rrpPrice = newPrice
      }

      const parsedRrpPrice = this._parsePrice(rrpPrice)
      const parsedNewPrice = this._parsePrice(newPrice)

      prices.push(isNaN(parsedRrpPrice) ? parsedNewPrice : parsedRrpPrice)
    }
    return prices
  }

  async assertProductsAreSortedByDescPrice() {
    const prices = await this.getAllPrices()
    for (let i = 0; i < prices.length - 1; i++) {
      const currentPrice = prices[i]
      const nextPrice = prices[i + 1]
      assert(currentPrice >= nextPrice, `${currentPrice} at index ${i} should be greater than or equal to ${nextPrice} at index ${i + 1}`)
    }
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

export default new Assertions()
