import Browser from '../../../framework/Browser.js'
import { assert } from 'chai'
import Strings from '../../constants/strings.js'
import CategoriesMenuBox from '../../pageobjects/DepartmentMenuBox.js'
import Logger from '../../../framework/logger/Logger.js'
import ItemGroupPage from '../../pageobjects/ItemGroupPage.js'
import Manufacturers from '../../constants/manufacturers.js'
import Departments from '../../constants/departments.js'
import Categories from '../../constants/categories.js'
import ManufacturerFilterForm from '../../pageobjects/ManufacturerFilterForm.js'

describe('Search and Filter Functionality on eMAG.bg', function () {
  it('should filter and sort Samsung products correctly', async function () {
    Logger.logStep('Open emag.bg')
    await Browser.open('/')
    assert.equal(await Browser.getPageTitle(), Strings.HOMEPAGE_TAB_TITLE, 'Home page title does not match.')

    Logger.logStep('Navigate to "Мобилни телефони"')
    await CategoriesMenuBox.openCategory(Departments['Phones, Tablets & Laptops'], Categories['Mobile Phones'].id)
    assert.include(await Browser.getPageTitle(), Categories['Mobile Phones'].bg, 'Category page title does not match.')
    assert.equal(await ItemGroupPage.getPageHeader(), Categories['Mobile Phones'].bg, 'Page header does not match.')

    Logger.logStep('Filter products by brand - "Samsung" and check if each product on the first two pages matches the search')
    await filterByManufacturer(Manufacturers.SAMSUNG)
    await assertProductTitlesIncludeManufacturer(Manufacturers.SAMSUNG, 2)
  })
})
