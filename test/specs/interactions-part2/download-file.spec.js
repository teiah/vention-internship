import DownloadFilePage from '../../pageobjects/download-file.page.js'
import { existsSync, statSync, unlinkSync } from 'node:fs'
import path from 'node:path'
import { assert } from 'chai'
import { defaultDownloadPath } from '../../../wdio.conf.js'
import { Timeouts } from '../../../constants/timeouts.js'

describe('File download exercise', function () {
  let downloadPath
  it('Should download file', async function () {
    await DownloadFilePage.open()

    // Select a random filename with one of these extensions: jpg, txt, png, json.
    const elements = await DownloadFilePage.safeElements
    const selectedElement = elements[Math.floor(Math.random() * elements.length)]

    // Download a file with the selected filename
    await selectedElement.click()

    // Verify the presence of the downloaded file in the file system.
    const href = await selectedElement.getAttribute('href')
    const filename = path.basename(href)
    downloadPath = path.join(defaultDownloadPath, filename)
    await browser.waitUntil(async () => existsSync(downloadPath), Timeouts.DEFAULT_WAIT_TIMEOUT)
    const fileStats = statSync(downloadPath)
    assert.isTrue(existsSync(downloadPath), 'Download file does not exist')
    assert.isAbove(fileStats.size, 0, 'Downloaded file is empty')
  })
  // Clean up
  after(async function () {
    try {
      if (await browser.call(async () => existsSync(downloadPath))) {
        await browser.call(async () => unlinkSync(downloadPath))
      }
    } catch (err) {
      console.error(`Error deleting file: ${err.message}`)
    }
  })
})
