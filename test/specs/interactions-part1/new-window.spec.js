import { NewWindow } from '../../pageobjects/new-window.page.js'
import { NewTab } from '../../pageobjects/new-tab.page.js'
import * as utils from '../../../src/help-functions.js'
import { assert } from 'chai'

describe('New window exercise', function () {
  it('Should open new window', async function () {
    await browser.url('https://the-internet.herokuapp.com/windows')
    const newWindowPage = new NewWindow()

    // Verify the page header is "Opening a new window".
    const expectedHeaderTitle = 'Opening a new window'
    const actualHeaderTitle = await utils.getTextFromElement(newWindowPage.pageHeader)
    assert.equal(actualHeaderTitle, expectedHeaderTitle, `Page header should be "${expectedHeaderTitle}"`)

    // Click the “Click Here” link and confirm a new tab opens
    await utils.clickElement(newWindowPage.clickHereLink)
    const windowHandles = await browser.getWindowHandles()
    const numberOfTabsOpened = windowHandles.length
    assert.equal(numberOfTabsOpened, 2)
    console.log(windowHandles)

    // Validate that the URL in the new tab is https://the-internet.herokuapp.com/windows/new
    await browser.switchToWindow(windowHandles[1])
    const expectedUrl = 'https://the-internet.herokuapp.com/windows/new'
    assert.equal(await browser.getUrl(), expectedUrl)

    // Ensure the page text in the new tab is “New Window”
    const newTab = new NewTab()
    const actualNewHeader = await utils.getTextFromElement(newTab.pageHeader)
    const expectedNewHeader = 'New Window'
    assert.equal(actualNewHeader, expectedNewHeader, 'Page header should be "New Window"')
  })
})
