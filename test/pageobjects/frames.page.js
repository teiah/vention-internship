import { Page } from './page.js'

class FramesPage extends Page {
  open() {
    return super.open('http://the-internet.herokuapp.com/frames')
  }

  get iFramesLink() {
    return $('=iFrame')
  }
}
export default new FramesPage()
