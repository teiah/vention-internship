import Label from '../../../framework/elements/Label.js'
import Link from '../../../framework/elements/Link.js'

class ItemGroupPage {
  constructor() {
    this.pageHeader = new Label('Page Header', '//h1[@class="title-phrasing title-phrasing-xl"]')
    this.currentPageLink = new Link('Current page link', "//li[@class='active']//a[@data-page]")
  }

  async getPageHeader() {
    return this.pageHeader.getText()
  }

  _createPageLink(pageNumber) {
    const xpath = `//a[@data-page="${pageNumber}"]`
    return new Link(`Page ${pageNumber}`, xpath)
  }

  async goToPage(pageNumber) {
    await this._createPageLink(pageNumber).click()
  }

  async getCurrentPageNumber() {
    return this.currentPageLink.getAttribute('data-page')
  }
}

export default new ItemGroupPage()
