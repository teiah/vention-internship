import Browser from '../../../framework/Browser.js'
import { assert } from 'chai'
import Titles from '../../constants/Titles.js'
import CategoriesMenuBox from '../../pageobjects/DepartmentMenuBox.js'
import Logger from '../../../framework/logger/Logger.js'
import ItemGroupPage from '../../pageobjects/itemPage/ItemGroupPage.js'
import Manufacturers from '../../constants/Manufacturers.js'
import Departments from '../../constants/Departments.js'
import sortOptions from '../../constants/SortOptions.js'
import Steps from '../../steps/Steps.js'
import Assertions from '../../steps/Assertions.js'
import CookiesForm from '../../pageobjects/CookiesForm.js'
import LoginPromptForm from '../../pageobjects/LoginPromptForm.js'
import Categories from '../../constants/Categories.js'

describe('Search and Filter Functionality on eMAG.bg', function () {
  it('should filter and sort Braun products correctly', async function () {
    Logger.logStep('Open emag.bg')
    await Browser.open('/')
    assert.equal(await Browser.getPageTitle(), Titles.HOMEPAGE_TAB_TITLE, 'Home page title does not match.')

    Logger.logStep('Accept cookies')
    await CookiesForm.acceptCookies()
    await LoginPromptForm.closeLoginPrompt()

    Logger.logStep('Navigate to "Здраве и красота – Ел. самобръсначки”"')
    await CategoriesMenuBox.openCategory(Departments['Health & Beauty'], Categories['Electric shavers'].id)
    assert.include(await Browser.getPageTitle(), Categories['Electric shavers'].title, 'Category page title does not match.')
    assert.equal(await ItemGroupPage.getPageHeader(), Categories['Electric shavers'].bg, 'Page header does not match.')

    Logger.logStep('Filter products by brand - "Braun" and check if each product on the first two pages matches the search')
    await Steps.filterByManufacturer(Manufacturers.BRAUN)
    await Assertions.assertProductTitlesIncludeManufacturer(Manufacturers.BRAUN, 2)

    Logger.logStep('Sort the products by price in descending order and check if pricing matches the sorting')
    await Steps.sortProductsBy(sortOptions.PriceDesc)
    await Assertions.assertProductsAreSortedByDescPrice()
  })
})
