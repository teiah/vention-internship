import { Page } from './page.js'

class DownloadFilePage extends Page {
  open() {
    return super.open('http://the-internet.herokuapp.com/download')
  }

  get safeElements() {
    return $$(
      `//a[@href[substring(., string-length(.) - string-length(".jpg") + 1) = ".jpg" 
      or substring(., string-length(.) - string-length(".png") + 1) = ".png" 
      or substring(., string-length(.) - string-length(".txt") + 1) = ".txt" 
      or substring(., string-length(.) - string-length(".json") + 1) = ".json"]]`,
    )
  }
}
export default new DownloadFilePage()
