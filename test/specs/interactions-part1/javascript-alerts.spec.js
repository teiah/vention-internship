import { AlertsPage } from '../../pageobjects/alerts.page.js'
import { assert } from 'chai'

describe('Javascript Alerts exercise', function () {
  it('Should interact with alerts', async function () {
    await browser.url('https://the-internet.herokuapp.com/javascript_alerts')
    const alertsPage = new AlertsPage()

    // Verify the page header is "JavaScript Alerts".
    const expectedHeaderTitle = 'JavaScript Alerts'
    await alertsPage.pageHeader.isDisplayed()
    const actualHeaderTitle = await alertsPage.pageHeader.getText()
    assert.equal(actualHeaderTitle, expectedHeaderTitle, `Page header should be "${expectedHeaderTitle}"`)

    // Confirm that the description text is “Here are some examples of different JavaScript alerts which can be troublesome for automation”.
    const expectedDescription = 'Here are some examples of different JavaScript alerts which can be troublesome for automation'
    const actualDescription = await alertsPage.description.getText()
    assert.equal(actualDescription, expectedDescription, `Page header should be "${expectedDescription}"`)

    // Validate the presence of the following buttons: "Click for JS Alert", "Click for JS Confirm", and "Click for JS Prompt".
    assert.isTrue(await alertsPage.jSAlertButton.isDisplayed(), '"Click for JS Alert" button should be displayed')
    assert.isTrue(await alertsPage.jSConfirmButton.isDisplayed(), '"Click for JS Confirm" button should be displayed')
    assert.isTrue(await alertsPage.jSPromptButton.isDisplayed(), '"Click for JS Prompt" button should be displayed')

    /* Click "Click for JS Alert" and confirm the alert text is “I am a JS Alert”.
    Click "OK" and ensure the page displays “You successfully clicked an alert”. */
    await alertsPage.jSAlertButton.waitForClickable()
    await alertsPage.jSAlertButton.click()
    const expectedAlertText = 'I am a JS Alert'
    await verifyAlertText(expectedAlertText)
    await browser.acceptAlert()
    await alertsPage.jSAlertMessage.waitForDisplayed()
    assert.isTrue(await alertsPage.jSAlertMessage.isDisplayed(), 'Result message should be displayed')

    /* Click "Click for JS Confirm", confirm the alert text is “I am a JS Confirm”, click "Cancel",
    // and ensure the green text “You clicked: Cancel” appears on the page. */
    await alertsPage.jSConfirmButton.waitForClickable()
    await alertsPage.jSConfirmButton.click()
    const expectedConfirmText = 'I am a JS Confirm'
    await verifyAlertText(expectedConfirmText)
    await browser.dismissAlert()
    await alertsPage.jSConfirmMessage.waitForDisplayed()
    assert.isTrue(await alertsPage.jSConfirmMessage.isDisplayed(), 'Result message should be displayed')

    /* Click "Click for JS Prompt", verify the alert text is “I am a JS prompt”, enter text “Hello from test”,
    // click "OK", and confirm the page displays “You entered: Hello from test”.*/
    await alertsPage.jSPromptButton.waitForClickable()
    await alertsPage.jSPromptButton.click()
    const expectedPromptText = 'I am a JS prompt'
    await verifyAlertText(expectedPromptText)
    await browser.sendAlertText('Hello from test')
    await browser.acceptAlert()
    await alertsPage.jSPromptMessage.waitForDisplayed()
    assert.isTrue(await alertsPage.jSPromptMessage.isDisplayed(), 'Result message should be displayed')
  })
})

async function verifyAlertText(expectedText) {
  assert.isTrue(await browser.isAlertOpen())
  const actualText = await browser.getAlertText()
  assert.equal(expectedText, actualText)
}
