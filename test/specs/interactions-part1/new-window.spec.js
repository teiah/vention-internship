import { assert } from 'chai'
import { browser } from '@wdio/globals'

describe('New window exercise', () => {
  it('Should open new window', async () => {
    await browser.url('https://the-internet.herokuapp.com/windows')

    // Verify the page header is "Opening a new window".
    const header = await browser.$('h3=Opening a new window')
    const actualHeaderTitle = await header.getText()
    const expectedHeaderTitle = 'Opening a new window'
    assert.equal(actualHeaderTitle, expectedHeaderTitle, 'Page header should be "Opening a new window"')

    // Click the “Click Here” link and confirm a new tab opens
    await browser.$('=Click Here').click()
    const windowHandles = await browser.getWindowHandles()
    const numberOfTabsOpened = windowHandles.length
    assert.equal(numberOfTabsOpened, 2)
    console.log(windowHandles)

    // Validate that the URL in the new tab is https://the-internet.herokuapp.com/windows/new
    await browser.switchToWindow(windowHandles[1])
    const expectedUrl = 'https://the-internet.herokuapp.com/windows/new'
    assert.equal(await browser.getUrl(), expectedUrl)

    // Ensure the page text in the new tab is “New Window”
    const newHeader = await browser.$('h3=New Window')
    const actualNewHeader = await newHeader.getText()
    const expectedNewHeader = 'New Window'
    assert.equal(actualNewHeader, expectedNewHeader, 'Page header should be "New Window"')
  })
})
