import TextBox from '../../../framework/elements/TextBox.js'
import Checkbox from '../../../framework/elements/Checkbox.js'
import Button from '../../../framework/elements/Button.js'

class FilterPopupForm {
  constructor() {
    this.searchField = new TextBox('Search field', "//input[contains(@class, 'js-filter-search')]")
    this.filterButton = new Button('Filter Button', '//button[contains(@class, "js-set-options")]')
  }

  _createFilterCheckbox(brandName) {
    const xpath = `//a[@data-name="${brandName}" and @data-position="popup"]`
    return new Checkbox('Department link', xpath)
  }

  async selectCheckbox(brandName) {
    await this._createFilterCheckbox(brandName).click()
  }

  async clickFilterButton() {
    await this.filterButton.waitForClickable()
    await this.filterButton.click()
  }
}

export default new FilterPopupForm()
