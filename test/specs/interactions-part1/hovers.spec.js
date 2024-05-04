import HoversPage from '../../pageobjects/hovers.page.js'
import UserProfile from '../../pageobjects/user-profile.page.js'
import { assert } from 'chai'

describe('Hover exercise', function () {
  it('Should hover over elements', async function () {
    await HoversPage.open()

    // Verify the page header is "Hovers".
    const expectedHeaderTitle = 'Hovers'
    const actualHeaderTitle = await HoversPage.pageHeader.getText()
    assert.equal(actualHeaderTitle, expectedHeaderTitle, `Page header should be "${expectedHeaderTitle}"`)

    // Confirm the description text is “Hover over the image for additional information”.
    const expectedDescription = 'Hover over the image for additional information'
    const actualDescription = await HoversPage.description.getText()
    assert.equal(actualDescription, expectedDescription, `Page header should be ${expectedDescription}`)

    // Hover over each image and validate the name and the "View Profile" link are displayed.
    for (let i = 1; i <= (await HoversPage.profileContainers.length); i++) {
      await HoversPage.getImageByIndex(i).moveTo()
      assert.isTrue(await HoversPage.getUserNameByIndex(i).isDisplayed(), 'Username should be displayed')
      assert.isTrue(await HoversPage.getViewProfileLink(i).isDisplayed(), 'View Profile link should be displayed')
    }

    // Click the "View Profile" link for user 3 and ensure that the URL changes to https://the-internet.herokuapp.com/users/3.
    await HoversPage.getViewProfileLink(3).click()
    const expectedUrl = 'https://the-internet.herokuapp.com/users/3'
    const currentBrowser = await browser.getUrl()
    assert.equal(currentBrowser, expectedUrl)

    // Confirm the page displays “Not Found”.
    const actualHeader = await UserProfile.pageHeader.getText()
    const expectedHeader = 'Not Found'
    assert.equal(actualHeader, expectedHeader, 'Page header should be "Hovers"')
  })
})
