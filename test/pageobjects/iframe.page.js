import { Page } from './page.js'

class IFramePage extends Page {
  open() {
    return super.open('http://the-internet.herokuapp.com/iframe')
  }

  get frame() {
    return $('iframe[id="mce_0_ifr"]')
  }

  get text() {
    return $('p=Your content goes here.')
  }
}
export default new IFramePage()
