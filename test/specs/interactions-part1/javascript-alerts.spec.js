import AlertsPage from '../../pageobjects/alerts.page.js'
import { assert } from 'chai'

describe('Javascript Alerts exercise', function () {
  it('Should interact with alerts', async function () {
    await AlertsPage.open()

    // Verify the page header is "JavaScript Alerts".
    const expectedHeaderTitle = 'JavaScript Alerts'
    const actualHeaderTitle = await AlertsPage.pageHeader.getText()
    assert.equal(actualHeaderTitle, expectedHeaderTitle, `Page header should be "${expectedHeaderTitle}"`)

    // Confirm that the description text is “Here are some examples of different JavaScript alerts which can be troublesome for automation”.
    const expectedDescription = 'Here are some examples of different JavaScript alerts which can be troublesome for automation'
    const actualDescription = await AlertsPage.description.getText()
    assert.equal(actualDescription, expectedDescription, `Page header should be "${expectedDescription}"`)

    // Validate the presence of the following buttons: "Click for JS Alert", "Click for JS Confirm", and "Click for JS Prompt".
    assert.isTrue(await AlertsPage.jSAlertButton.isDisplayed(), '"Click for JS Alert" button should be displayed')
    assert.isTrue(await AlertsPage.jSConfirmButton.isDisplayed(), '"Click for JS Confirm" button should be displayed')
    assert.isTrue(await AlertsPage.jSPromptButton.isDisplayed(), '"Click for JS Prompt" button should be displayed')

    /* Click "Click for JS Alert" and confirm the alert text is “I am a JS Alert”.
    Click "OK" and ensure the page displays “You successfully clicked an alert”. */
    await AlertsPage.jSAlertButton.click()
    const expectedAlertText = 'I am a JS Alert'
    await verifyAlertText(expectedAlertText)
    await browser.acceptAlert()
    await AlertsPage.resultMessage.waitForDisplayed()
    assert.isTrue(await AlertsPage.resultMessage.isDisplayed(), 'Result message should be displayed')

    /* Click "Click for JS Confirm", confirm the alert text is “I am a JS Confirm”, click "Cancel",
    // and ensure the green text “You clicked: Cancel” appears on the page. */
    await AlertsPage.jSConfirmButton.click()
    const expectedConfirmText = 'I am a JS Confirm'
    await verifyAlertText(expectedConfirmText)
    await browser.dismissAlert()
    await AlertsPage.resultMessage.waitForDisplayed()
    assert.isTrue(await AlertsPage.resultMessage.isDisplayed(), 'Result message should be displayed')
    await assertMessageIsGreen(AlertsPage.resultMessage)

    /* Click "Click for JS Prompt", verify the alert text is “I am a JS prompt”, enter text “Hello from test”,
    // click "OK", and confirm the page displays “You entered: Hello from test”.*/
    await AlertsPage.jSPromptButton.click()
    const expectedPromptText = 'I am a JS prompt'
    await verifyAlertText(expectedPromptText)
    await browser.sendAlertText('Hello from test')
    await browser.acceptAlert()
    await AlertsPage.resultMessage.waitForDisplayed()
    assert.isTrue(await AlertsPage.resultMessage.isDisplayed(), 'Result message should be displayed')
  })
})

async function assertMessageIsGreen(element) {
  const resultMessageStyle = await element.getCSSProperty('color')
  assert.equal(resultMessageStyle.value, 'rgba(0,128,0,1)', 'The color is green')
}

async function verifyAlertText(expectedText) {
  assert.isTrue(await browser.isAlertOpen())
  const actualText = await browser.getAlertText()
  assert.equal(expectedText, actualText)
}
