import { Page } from './page.js'

class CheckboxesPage extends Page {
  open() {
    return super.open('https://the-internet.herokuapp.com/checkboxes')
  }

  get checkbox1() {
    return $('//form/input[1]')
  }

  get checkbox2() {
    return $('//form/input[2]')
  }
}
export default new CheckboxesPage()
