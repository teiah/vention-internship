import Link from '../../framework/elements/Link.js'

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

  async openCategory(departmentId, categoryId) {
    await this.hoverOverDepartment(departmentId)
    await this._createCategoryLink(categoryId).click()
  }
}

export default new DepartmentMenuBox()
