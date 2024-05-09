import { Page } from './page.js'

class UserProfile extends Page {
  get pageHeader() {
    return $('h1=Not Found')
  }
}
export default new UserProfile()
