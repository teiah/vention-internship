import { Page } from './page.js'

class DownloadFilePage extends Page {
  open() {
    return super.open('http://the-internet.herokuapp.com/download')
  }

  get safeElements() {
    return $$('//a[contains("json.jpg.png.txt", substring(., string-length(.) - 3))]')
  }
}
export default new DownloadFilePage()
