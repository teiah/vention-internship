import Browser from '../../framework/Browser.js'
import Timeouts from '../constants/Timeouts.js'
import ManufacturerFilterForm from '../pageobjects/filters/ManufacturerFilterForm.js'
import FilterPopupForm from '../pageobjects/filters/FilterPopupForm.js'
import ItemGroupPage from '../pageobjects/itemPage/ItemGroupPage.js'
import SortByForm from '../pageobjects/itemPage/SortByForm.js'

class Steps {
  async filterByManufacturer(manufacturer) {
    await ManufacturerFilterForm.seeMoreButton.click()
    await FilterPopupForm.searchField.setText(manufacturer)
    await FilterPopupForm.selectCheckbox(manufacturer)
    await FilterPopupForm.clickFilterButton()

    await Browser.waitUntil(
      async () => {
        const pageHeader = await ItemGroupPage.getPageHeader()
        return pageHeader.includes(manufacturer)
      },
      {
        timeout: Timeouts.SHORT_TIMEOUT,
        timeoutMsg: `Expected page header to include ${manufacturer}`,
      },
    )
  }

  async sortProductsBy(sortOption) {
    await SortByForm.sortByButton.click()
    const optionElement = await SortByForm.getSortOption(sortOption.id, sortOption.dir)
    await optionElement.waitForClickable()
    await optionElement.click()

    if (sortOption.url) {
      await Browser.waitUntil(async () => (await Browser.getUrl()).includes(sortOption.url), {
        timeout: Timeouts.SHORT_TIMEOUT,
        timeoutMsg: 'Expected URL to change after selecting filter',
      })
    }
  }
}
export default new Steps()
