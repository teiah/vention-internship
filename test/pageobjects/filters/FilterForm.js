import Link from '../../../framework/elements/Link.js'

class FilterForm {
  constructor(id) {
    this.id = id
    this.seeMoreLink = new Link('See more button', `//a[@data-filter-id=${this.id}]`)
  }

  async clickSeeMoreLink() {
    await this.seeMoreLink.waitForClickable()
    await this.seeMoreLink.click()
  }
}
export default FilterForm
