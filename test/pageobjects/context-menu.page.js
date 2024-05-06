import { Page } from './page.js'

class ContextMenu extends Page {
  open() {
    return super.open('http://the-internet.herokuapp.com/context_menu')
  }

  get specifiedElement() {
    return $('#hot-spot')
  }
}
export default new ContextMenu()
