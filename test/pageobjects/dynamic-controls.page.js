import { Page } from './page.js'

class DynamicControlsPage extends Page {
  open() {
    return super.open('http://the-internet.herokuapp.com/dynamic_controls')
  }

  get removeButton() {
    return $('button=Remove')
  }

  get confirmationMessage() {
    return $('#message')
  }

  get checkbox() {
    return $('#checkbox=A checkbox')
  }

  get inputField() {
    return $("input[type='text']")
  }

  get enableButton() {
    return $('button=Enable')
  }
}
export default new DynamicControlsPage()
