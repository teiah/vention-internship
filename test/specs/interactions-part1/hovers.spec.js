import { assert } from 'chai'
import { browser } from '@wdio/globals'
import { getHeaderTitle, getDescriptionText } from '../../../src/help-functions.js'

describe('Hover exercise', () => {
  it('Should hover over elements', async () => {
    await browser.url('https://the-internet.herokuapp.com/hovers')

    // Verify the page header is "Hovers".
    const expectedHeaderTitle = 'Hovers'
    const actualHeaderTitle = await getHeaderTitle(expectedHeaderTitle)
    assert.equal(actualHeaderTitle, expectedHeaderTitle, `Page header should be "${expectedHeaderTitle}"`)

    // Confirm the description text is “Hover over the image for additional information”.
    const expectedDescription = 'Hover over the image for additional information'
    const actualDescription = await getDescriptionText(expectedDescription)
    assert.equal(actualDescription, expectedDescription, `Page header should be ${expectedDescription}`)

    // Hover over Image #1 and validate the name "user1" and the "View Profile" link are displayed.
    await moveToElement('//div[@class="figure"][1]/img')
    await assertUsername('user1')
    await assertProfileLink('View profile')

    // Hover over Image #2 to confirm the name "user2" and the "View Profile" link appear.
    await moveToElement('//div[@class="figure"][2]/img')
    await assertUsername('user2')
    await assertProfileLink('View profile')

    // Hover over Image #3 to confirm the name "user3" and the "View Profile" link appear.
    await moveToElement('//div[@class="figure"][3]/img')
    await assertUsername('user3')
    await assertProfileLink('View profile')

    // Click the "View Profile" link for user 3 and ensure that the URL changes to https://the-internet.herokuapp.com/users/3.
    const viewProfileLink = await browser.$('=View profile')
    await viewProfileLink.click()
    const expectedUrl = 'https://the-internet.herokuapp.com/users/3'
    const currentBrowser = await browser.getUrl()
    assert.equal(currentBrowser, expectedUrl)

    // Confirm the page displays “Not Found”.
    const header1 = await browser.$('h1=Not Found')
    const actualHeader = await header1.getText()
    const expectedHeader = 'Not Found'
    assert.equal(actualHeader, expectedHeader, 'Page header should be "Hovers"')
  })
})
async function moveToElement(selector) {
  const element = await browser.$(selector)
  await element.moveTo()
}

async function assertUsername(username) {
  const userElement = await browser.$(`h5=name: ${username}`)
  await userElement.waitForDisplayed()
  assert.isTrue(await userElement.isDisplayed(), 'User should be displayed')
}

async function assertProfileLink(linkText) {
  const viewProfileLink = await browser.$(`=${linkText}`)
  await viewProfileLink.waitForDisplayed()
  assert.isTrue(await viewProfileLink.isDisplayed(), `"${linkText}" link should be displayed`)
}
