import AddElementPage from '../../pageobjects/addelement.page.js'
import { assert } from 'chai'

describe('Add/Remove Element exercise', function () {
  it('Should Add/Remove element', async function () {
    await AddElementPage.open()

    // Verify the page header is "Add/Remove Elements"
    const expectedHeaderTitle = 'Add/Remove Elements'
    const actualHeaderTitle = await AddElementPage.pageHeader.getText()
    assert.equal(actualHeaderTitle, expectedHeaderTitle, `Page header should be "${expectedHeaderTitle}"`)

    // Confirm the "Add Element" button is present, while the "Delete" button is not
    assert.isTrue(await AddElementPage.addElementButton.isDisplayed(), 'Add Element button should be displayed')

    assert.isFalse(await AddElementPage.deleteElementButton.isExisting(), 'Delete button should not exist on the page')

    // Click the "Add Element" button 10 times.
    const numberOfExecutions = 10
    for (let i = 0; i < numberOfExecutions; i++) {
      await AddElementPage.addElementButton.click()
    }

    // Assert that there are 10 delete buttons displayed
    const numberOfDeleteButtons = await AddElementPage.numberOfDeleteButtons
    assert.strictEqual(numberOfDeleteButtons, numberOfExecutions, `Expected ${numberOfExecutions} delete buttons to be displayed`)

    // Click each "Delete" button and confirm that the number of buttons reduces by one each time.
    for (let i = 0; i < numberOfDeleteButtons; i++) {
      await AddElementPage.deleteElementButton.click()
      assert.strictEqual(
        await AddElementPage.numberOfDeleteButtons,
        numberOfExecutions - i - 1,
        `Expected ${numberOfExecutions - i - 1} delete buttons remaining after clicking button number ${i + 1}`,
      )
    }
    // Confirm that no "Delete" buttons are left on the page.
    assert.isFalse(await AddElementPage.deleteElementButton.isExisting(), 'Delete button should not exist on the page')
  })
})
