import TextBox from '../../../framework/elements/TextBox.js'

class FilterForm {
  _createFilterNameLabel(filterId) {
    const xpath = `//div[@data-filter-id="${filterId}"]`
    return new TextBox(`${filterId}`, xpath)
  }
}

export default FilterForm
