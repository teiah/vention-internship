import Link from '../../framework/elements/Link.js'
import Browser from '../../framework/Browser.js'
import Timeouts from '../constants/Timeouts.js'

class DepartmentMenuBox {
  _createDepartmentLabel(departmentId) {
    const xpath = `//li[@data-id="${departmentId}"]`
    return new Link('Department link', xpath)
  }

  _createCategoryLink(categoryId) {
    const xpath = `//a[@data-id="${categoryId}"]`
    return new Link('Category link', xpath)
  }

  async hoverOverDepartment(departmentId) {
    await this._createDepartmentLabel(departmentId).moveTo()
  }

  async openCategory(departmentId, category) {
    await this.hoverOverDepartment(departmentId)
    await this._createCategoryLink(category.id).click()

    await Browser.waitUntil(async () => (await Browser.getUrl()).includes(category.url), {
      timeout: Timeouts.SHORT_TIMEOUT,
      timeoutMsg: 'Expected URL to change.',
    })
  }
}

export default new DepartmentMenuBox()
