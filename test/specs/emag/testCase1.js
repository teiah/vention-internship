import Browser from '../../../framework/Browser.js'
import { assert } from 'chai'
import Strings from '../../constants/strings.js'
import CategoriesMenuBox from '../../pageobjects/DepartmentMenuBox.js'
import FilterPopupForm from '../../pageobjects/FilterPopupForm.js'
import Logger from '../../../framework/logger/Logger.js'
import ItemGroupPage from '../../pageobjects/ItemGroupPage.js'
import Manufacturers from '../../constants/manufacturers.js'
import Timeouts from '../../constants/timeouts.js'
import Departments from '../../constants/departments.js'
import Categories from '../../constants/categories.js'
import ManufacturerFilterForm from '../../pageobjects/ManufacturerFilterForm.js'

const GAME_URL = 'https://emag.bg'

describe('Test Case 1', function () {
  it('???', async function () {
    Logger.logStep('Open emag.bg')
    await Browser.open(GAME_URL)
    assert.equal(await Browser.getPageTitle(), Strings.HOMEPAGE_TAB_TITLE, 'Home page title does not match.')

    Logger.logStep('Navigate to "Мобилни телефони"')
    await CategoriesMenuBox.openCategory(Departments['Phones, Tablets & Laptops'], Categories['Mobile Phones'].id)
    assert.include(await Browser.getPageTitle(), Categories['Mobile Phones'].bg, 'Category page title does not match.')
    assert.equal(await ItemGroupPage.getPageHeader(), Categories['Mobile Phones'].bg, 'Page header does not match.')

    Logger.logStep('Filter products by brand - "Samsung" and check if each product on the first two pages matches the search')
    await filterByManufacturer(Manufacturers.SAMSUNG)
    await assertProductTitlesIncludeManufacturer(Manufacturers.SAMSUNG, 2)
  })

  async function assertProductTitlesIncludeManufacturer(manufacturer, numPages = 1) {
    const assertOnCurrentPage = async () => {
      const titles = await ItemGroupPage.getAllProductTitles()
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

  /* Does it make sense to make this method and the assertion to both be able to work with multiple manufacturers?
  I know I don't need it on these cases but this way it feels kind of limited. */
  async function filterByManufacturer(manufacturer) {
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
})
