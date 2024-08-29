import Logger from '../../../framework/logger/Logger.js'
import Browser from '../../../framework/Browser.js'
import CookiesForm from '../../pageobjects/CookiesForm.js'
import LoginPromptForm from '../../pageobjects/LoginPromptForm.js'
import Titles from '../../constants/Titles.js'
import { assert } from 'chai'
import DepartmentMenuBox from '../../pageobjects/DepartmentMenuBox.js'
import ItemGroupPage from '../../pageobjects/itemPage/ItemGroupPage.js'
import Steps from '../../steps/Steps.js'
import Assertions from '../../steps/Assertions.js'
import sortOptions from '../../constants/SortOptions.js'
import Categories from '../../constants/Categories.js'
import Departments from '../../constants/Departments.js'
import Manufacturers from '../../constants/Manufacturers.js'

function testProductSearchAndFilter(category, department, brand, titleKeyword, sortOption, numPagesToCheck) {
  describe('Search and Filter Functionality on eMAG.bg', function () {
    it(`should filter and sort ${brand} products correctly`, async function () {
      Logger.logStep('Open emag.bg')
      await Browser.open('/')
      assert.equal(await Browser.getPageTitle(), Titles.HOMEPAGE_TAB_TITLE, 'Home page title does not match.')

      Logger.logStep('Accept cookies')
      await CookiesForm.acceptCookies()
      await LoginPromptForm.closeLoginPrompt()

      Logger.logStep(`Navigate to "${department.name} – ${category.name}"`)
      await DepartmentMenuBox.openCategory(department, category)
      assert.include(await Browser.getPageTitle(), titleKeyword, 'Category page title does not match.')
      assert.equal(await ItemGroupPage.getPageHeaderText(), category.name, 'Page header does not match.')

      Logger.logStep(`Filter products by brand - "${brand}" and check if each product on the first ${numPagesToCheck} pages matches the search`)
      await Steps.filterByManufacturer(brand)
      await Assertions.assertProductTitlesIncludeManufacturer(brand, numPagesToCheck)

      Logger.logStep(`Sort the products by ${sortOption.name} and check if pricing matches the sorting`)
      await Steps.sortProductsBy(sortOption)
      await Assertions.assertProductsAreSortedByDescPrice()
    })
  })
}

// Example usage for Daikin products in "Големи електроуреди – Климатици"
testProductSearchAndFilter(
  Categories.AIR_CONDITIONING,
  Departments.LARGE_APPLIANCES,
  Manufacturers.DAIKIN,
  Categories.AIR_CONDITIONING.name,
  sortOptions.PRICE_DESC,
  2,
)

