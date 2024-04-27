import { assert } from 'chai'
import { browser } from '@wdio/globals'
import { getHeaderTitle, getDescriptionText } from '../../../src/help-functions.js'

describe('Javascript Alerts exercise', () => {
  it('Should interact with alerts', async () => {
    await browser.url('https://the-internet.herokuapp.com/javascript_alerts')

    // Verify the page header is "JavaScript Alerts".
    const expectedHeaderTitle = 'JavaScript Alerts'
    const actualHeaderTitle = await getHeaderTitle(expectedHeaderTitle)
    assert.equal(actualHeaderTitle, expectedHeaderTitle, `Page header should be "${expectedHeaderTitle}"`)

    // Confirm that the description text is “Here are some examples of different JavaScript alerts which can be troublesome for automation”.
    const expectedDescription = 'Here are some examples of different JavaScript alerts which can be troublesome for automation'
    const actualDescription = await getDescriptionText(expectedDescription)
    assert.equal(actualDescription, expectedDescription, `Page header should be "${expectedDescription}"`)

    // Validate the presence of the following buttons: "Click for JS Alert", "Click for JS Confirm", and "Click for JS Prompt".
    const jSAlertButton = await browser.$('button*=JS Alert')
    let isDisplayed = await jSAlertButton.waitForDisplayed()
    assert.isTrue(isDisplayed, '"Click for JS Alert" button should be displayed')

    const jSConfirmButton = await browser.$('button*=JS Confirm')
    isDisplayed = await jSConfirmButton.waitForDisplayed()
    assert.isTrue(isDisplayed, '"Click for JS Confirm" button should be displayed')

    const jSPromptButton = await browser.$('button*=JS Prompt')
    isDisplayed = await jSPromptButton.waitForDisplayed()
    assert.isTrue(isDisplayed, '"Click for JS Prompt" button should be displayed')

    // Click "Click for JS Alert" and confirm the alert text is “I am a JS Alert”. Click "OK" and ensure the page displays “You successfully clicked an alert”.
    await jSAlertButton.click()
    assert(browser.isAlertOpen(), true)
    const expectedAlertText = 'I am a JS Alert'
    const actualAlertText = await browser.getAlertText()
    assert.equal(expectedAlertText, actualAlertText)
    await browser.acceptAlert()
    let resultMessage = await browser.$('p=You successfully clicked an alert')
    isDisplayed = await resultMessage.waitForDisplayed()
    assert.isTrue(isDisplayed, 'Result message should be displayed')

    // Click "Click for JS Confirm", confirm the alert text is “I am a JS Confirm”, click "Cancel", and ensure the green text “You clicked: Cancel” appears on the page.
    await jSConfirmButton.click()
    assert(browser.isAlertOpen(), true)
    const expectedConfirmText = 'I am a JS Confirm'
    const actualConfirmText = await browser.getAlertText()
    assert.equal(expectedConfirmText, actualConfirmText)
    await browser.dismissAlert()
    resultMessage = await browser.$('p=You clicked: Cancel')
    isDisplayed = await resultMessage.waitForDisplayed()
    assert.isTrue(isDisplayed, 'Result message should be displayed')

    // Click "Click for JS Prompt", verify the alert text is “I am a JS prompt”, enter text “Hello from test”, click "OK", and confirm the page displays “You entered: Hello from test”.
    await jSPromptButton.click()
    assert(browser.isAlertOpen(), true)
    const expectedPromptText = 'I am a JS prompt'
    const actualPromptText = await browser.getAlertText()
    assert.equal(expectedPromptText, actualPromptText)
    await browser.sendAlertText('Hello from test')
    await browser.acceptAlert()
    resultMessage = await browser.$('p=You entered: Hello from test')
    isDisplayed = await resultMessage.waitForDisplayed()
    assert.isTrue(isDisplayed, 'Result message should be displayed')
  })
})
