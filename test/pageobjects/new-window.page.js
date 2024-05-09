import { Page } from './page.js'

class NewWindowPage extends Page {
  open() {
    return super.open('https://the-internet.herokuapp.com/windows')
  }

  get clickHereLink() {
    return $('=Click Here')
  }
}
export default new NewWindowPage()
