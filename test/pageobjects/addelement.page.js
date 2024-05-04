import { Page } from './page.js'

class AddElementPage extends Page {
  open() {
    return super.open('https://the-internet.herokuapp.com/add_remove_elements/')
  }

  get pageHeader() {
    return $('h3=Add/Remove Elements')
  }

  get addElementButton() {
    return $('button=Add Element')
  }

  get deleteElementButton() {
    return $('button=Delete')
  }

  get deleteElementButtons() {
    return $$('button=Delete')
  }
}
export default new AddElementPage()
