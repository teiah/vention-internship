import ItemCardForm from '../pageobjects/itemPage/ItemCardForm.js'
import { assert } from 'chai'
import ItemGroupPage from '../pageobjects/itemPage/ItemGroupPage.js'
import PriceCardForm from '../pageobjects/itemPage/PriceCardForm.js'

class Assertions {
  async assertProductTitlesIncludeManufacturer(manufacturer, numPages = 1) {
    const assertOnCurrentPage = async () => {
      const titles = await ItemCardForm.getAllProductTitles()
      titles.forEach((title) => {
        assert.include(title, manufacturer)
      })
    }
    // Loop through specified number of pages
    for (let i = 0; i < numPages; i++) {
      await assertOnCurrentPage()

      // Navigate to the next page if there are more pages to check
      if (i < numPages - 1) {
        const currentPageNumber = await ItemGroupPage.getCurrentPageNumber()
        const nextPageNumber = parseInt(currentPageNumber, 10) + 1
        await ItemGroupPage.goToPage(nextPageNumber)
      }
    }
  }

  async assertProductsAreSortedByDescPrice() {
    const prices = await PriceCardForm.getAllPrices()
    for (let i = 0; i < prices.length - 1; i++) {
      const currentPrice = prices[i]
      const nextPrice = prices[i + 1]
      assert(currentPrice >= nextPrice, `${currentPrice} at index ${i} should be greater than or equal to ${nextPrice} at index ${i + 1}`)
    }
  }
}
export default new Assertions()
