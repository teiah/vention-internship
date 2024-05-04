import { Page } from './page.js'

class NewTab extends Page {
  get pageHeader() {
    return $('h3=New Window')
  }
}
export default new NewTab()
