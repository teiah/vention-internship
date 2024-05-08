import { Page } from './page.js'

class AddElementPage extends Page {
  open() {
    return super.open('https://the-internet.herokuapp.com/add_remove_elements/')
  }

  get addElementButton() {
    return $('button=Add Element')
  }

  get deleteElementButton() {
    return $('button=Delete')
  }

  get numberOfDeleteButtons() {
    return $$('button=Delete').length
  }
}
export default new AddElementPage()
