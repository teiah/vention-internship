import { Page } from './page.js'

class UploadFilePage extends Page {
  open() {
    return super.open('http://the-internet.herokuapp.com/upload')
  }

  get fileUpload() {
    return $('input[id="file-upload"]')
  }

  get uploadButton() {
    return $('input[id="file-submit"]')
  }

  get uploadedFileName() {
    return $('#uploaded-files')
  }
}
export default new UploadFilePage()
