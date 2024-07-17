import Link from '../../framework/elements/Link.js'
import FilterForm from './FilterForm.js'

class ManufacturerFilterForm extends FilterForm {
  constructor() {
    super()
    this.seeMoreButton = new Link('See more button', '//a[@data-filter-id="6416"]')
  }
}
export default new ManufacturerFilterForm()
