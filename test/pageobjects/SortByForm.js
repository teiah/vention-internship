import Button from '../../framework/elements/Button.js'
import Link from '../../framework/elements/Link.js'

class SortByForm {
  constructor() {
    this.sortByButton = new Button('Sort by button', '//button[contains(@class,"btn-alt sort-control-btn")]')
  }

  _createSortOptionLink(optionId, sortDir) {
    const xpath = `//a[@data-sort-id="${optionId}" and @data-sort-dir="${sortDir}"]`
    return new Link('Category link', xpath)
  }

  getSortOption(optionId, sortDir) {
    return this._createSortOptionLink(optionId, sortDir)
  }
}
export default new SortByForm()
