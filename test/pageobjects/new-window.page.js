import { Page } from './page.js'

class NewWindowPage extends Page {
  open() {
    return super.open('https://the-internet.herokuapp.com/windows')
  }

  get pageHeader() {
    return $('h3=Opening a new window')
  }

  get clickHereLink() {
    return $('=Click Here')
  }
}
export default new NewWindowPage()
