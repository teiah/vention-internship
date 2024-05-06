import ContextMenu from '../../pageobjects/context-menu.page.js'
import { assert } from 'chai'

describe('Context exercise', function () {
  it('Should interact with context menu', async function () {
    await ContextMenu.open()

    // Perform a right-click on a specified item.
    await ContextMenu.specifiedElement.click({ button: 'right', skipRelease: true })

    // Validate the text in an alert.
    const expectedText = 'You selected a context menu'
    await verifyAlertText(expectedText, `Alert text should be ${expectedText}`)

    // Close the alert.
    await browser.acceptAlert()
  })
})
async function verifyAlertText(expectedText, message) {
  assert.isTrue(await browser.isAlertOpen())
  const actualText = await browser.getAlertText()
  assert.equal(expectedText, actualText, message)
}
