import UploadFilePage from '../../pageobjects/upload-file.page.js'
import { assert } from 'chai'

describe('File upload exercise', function () {
  it('Should upload file', async function () {
    await UploadFilePage.open()

    // Upload any file to the application.
    const filePath = 'upload-files/olli-the-polite-cat.jpg'
    const remoteFilePath = await browser.uploadFile(filePath)
    await UploadFilePage.fileUpload.setValue(remoteFilePath)
    await UploadFilePage.uploadButton.click()

    // Check that the file name displayed on the page matches the uploaded file’s name.
    const expectedFileName = 'olli-the-polite-cat.jpg'
    assert.equal(await UploadFilePage.uploadedFileName.getText(), expectedFileName, `File name should be ${expectedFileName}`)
  })
})
