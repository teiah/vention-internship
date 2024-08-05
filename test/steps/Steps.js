import Browser from '../../framework/Browser.js'
import Timeouts from '../constants/Timeouts.js'
import FilterForm from '../pageobjects/filters/FilterForm.js'
import FilterPopupForm from '../pageobjects/filters/FilterPopupForm.js'
import ItemGroupPage from '../pageobjects/itemPage/ItemGroupPage.js'
import SortByForm from '../pageobjects/itemPage/SortByForm.js'
import Filters from '../constants/Filters.js'

class Steps {
  async filterByManufacturer(manufacturer) {
    const filterForm = new FilterForm(Filters.MANUFACTURED_BY)
    await filterForm.clickSeeMoreLink()
    const filterPopUpForm = new FilterPopupForm(Filters.MANUFACTURED_BY)
    await filterPopUpForm.searchField.setText(manufacturer)
    await filterPopUpForm.selectCheckbox(manufacturer)
    await filterPopUpForm.clickFilterButton()

    await Browser.waitUntil(
      async () => {
        const pageHeader = await ItemGroupPage.getPageHeaderText()
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
