import { HoversPage } from '../../pageobjects/hovers.page.js'
import { UserProfile } from '../../pageobjects/user-profile.page.js'
import * as utils from '../../../src/help-functions.js'
import { assert } from 'chai'
describe('Hover exercise', function () {
  it('Should hover over elements', async function () {
    await browser.url('https://the-internet.herokuapp.com/hovers')
    const hoversPage = new HoversPage()

    // Verify the page header is "Hovers".
    const expectedHeaderTitle = 'Hovers'
    const actualHeaderTitle = await utils.getTextFromElement(hoversPage.pageHeader)
    assert.equal(actualHeaderTitle, expectedHeaderTitle, `Page header should be "${expectedHeaderTitle}"`)

    // Confirm the description text is “Hover over the image for additional information”.
    const expectedDescription = 'Hover over the image for additional information'
    const actualDescription = await utils.getTextFromElement(hoversPage.description)
    assert.equal(actualDescription, expectedDescription, `Page header should be ${expectedDescription}`)

    // Hover over Image #1 and validate the name "user1" and the "View Profile" link are displayed.
    await moveToElement(hoversPage.getImageByNumber('1'))
    await assertElementIsDisplayed(hoversPage.getUserByName('user1'))
    await assertElementIsDisplayed(hoversPage.viewProfileLink)

    // Hover over Image #2 to confirm the name "user2" and the "View Profile" link appear.
    await moveToElement(hoversPage.getImageByNumber('2'))
    await assertElementIsDisplayed(hoversPage.getUserByName('user2'))
    await assertElementIsDisplayed(hoversPage.viewProfileLink)

    // Hover over Image #3 to confirm the name "user3" and the "View Profile" link appear.
    await moveToElement(hoversPage.getImageByNumber('3'))
    await assertElementIsDisplayed(hoversPage.getUserByName('user3'))
    await assertElementIsDisplayed(hoversPage.viewProfileLink)

    // Click the "View Profile" link for user 3 and ensure that the URL changes to https://the-internet.herokuapp.com/users/3.
    await utils.clickElement(hoversPage.viewProfileLink)
    const expectedUrl = 'https://the-internet.herokuapp.com/users/3'
    const currentBrowser = await browser.getUrl()
    assert.equal(currentBrowser, expectedUrl)

    // Confirm the page displays “Not Found”.
    const userProfile = new UserProfile()
    await userProfile.pageHeader.isDisplayed()
    const actualHeader = await userProfile.pageHeader.getText()
    const expectedHeader = 'Not Found'
    assert.equal(actualHeader, expectedHeader, 'Page header should be "Hovers"')
  })
})
async function moveToElement(element) {
  await element.isDisplayed()
  await element.moveTo()
}

async function assertElementIsDisplayed(element) {
  await element.waitForDisplayed()
  assert.isTrue(await element.isDisplayed(), 'Element should be displayed')
}
