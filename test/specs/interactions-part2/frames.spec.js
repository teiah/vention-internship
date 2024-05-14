import FramesPage from '../../pageobjects/frames.page.js'
import IFramePage from '../../pageobjects/iframe.page.js'
import { assert } from 'chai'

describe('Frames exercise', function () {
  it('Should interact with iframe', async function () {
    await FramesPage.open()

    // Open an iFrame within the application.
    await FramesPage.iFramesLink.click()

    // Verify that the text inside a paragraph within the iFrame is “Your content goes here.”
    await IFramePage.frame.waitForDisplayed()
    await browser.switchToFrame(await IFramePage.frame)
    const expectedText = 'Your content goes here.'
    assert.equal(await IFramePage.text.getText(), expectedText, `Text should be ${expectedText}`)
  })
})
