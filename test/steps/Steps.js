import Browser from '../../framework/Browser.js'
import Timeouts from '../constants/timeouts.js'
import ManufacturerFilterForm from '../pageobjects/ManufacturerFilterForm.js'
import FilterPopupForm from '../pageobjects/FilterPopupForm.js'
import ItemGroupPage from '../pageobjects/ItemGroupPage.js'
import SortByForm from '../pageobjects/SortByForm.js'

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

  async sortProductsBy(sortOptions) {
    await SortByForm.sortByButton.click()
    const optionElement = await SortByForm.getSortOption(sortOptions.id, sortOptions.dir)
    await optionElement.waitForClickable()
    await optionElement.click()

    if (sortOptions.url) {
      await Browser.waitUntil(async () => (await Browser.getUrl()).includes(sortOptions.url), {
        timeout: Timeouts.SHORT_TIMEOUT,
        timeoutMsg: 'Expected URL to change after selecting filter',
      })
    }
  }
}
export default new Steps()
