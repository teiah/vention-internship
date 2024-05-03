import { AddElementPage } from '../../pageobjects/addelement.page.js'
import * as utils from '../../../src/help-functions.js'
import { assert } from 'chai'

describe('Add/Remove Element exercise', function () {
  it('Should Add/Remove element', async function () {
    await browser.url('https://the-internet.herokuapp.com/add_remove_elements/')
    const addElementPage = new AddElementPage()

    // Verify the page header is "Add/Remove Elements"
    const expectedHeaderTitle = 'Add/Remove Elements'
    const actualHeaderTitle = await utils.getTextFromElement(addElementPage.pageHeader)
    assert.equal(actualHeaderTitle, expectedHeaderTitle, `Page header should be "${expectedHeaderTitle}"`)

    // Confirm the "Add Element" button is present, while the "Delete" button is not
    assert.isTrue(await addElementPage.addElementButton.isDisplayed(), 'Add Element button should be displayed')

    assert.isFalse(await addElementPage.deleteElementButton.isExisting(), 'Delete button should not exist on the page')

    // Click the "Add Element" button 10 times.
    const numberOfExecutions = 10
    for (let i = 0; i < numberOfExecutions; i++) {
      await utils.clickElement(addElementPage.addElementButton)
    }

    // Assert that there are 10 delete buttons displayed
    const deleteButtons = await addElementPage.deleteElementButtons
    assert.strictEqual(deleteButtons.length, numberOfExecutions, `Expected ${numberOfExecutions} delete buttons to be displayed`)

    // Click each "Delete" button and confirm that the number of buttons reduces by one each time.
    for (let i = 0; i < deleteButtons.length; i++) {
      await utils.clickElement(deleteButtons[i])
      const remainingDeleteButtons = await addElementPage.deleteElementButtons
      assert.strictEqual(
        remainingDeleteButtons.length,
        numberOfExecutions - i - 1,
        `Expected ${numberOfExecutions - i - 1} delete buttons remaining after clicking button number ${i + 1}`,
      )
    }
    // Confirm that no "Delete" buttons are left on the page.
    assert.isFalse(await addElementPage.deleteElementButton.isExisting(), 'Delete button should not exist on the page')
  })
})
