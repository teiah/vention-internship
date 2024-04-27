import { assert } from 'chai'
import { browser } from '@wdio/globals'
import { getHeaderTitle } from '../../../src/help-functions.js'

describe('Add/Remove Element', () => {
  it('Header is Add/Remove element', async () => {
    await browser.url('https://the-internet.herokuapp.com/add_remove_elements/')

    // Verify the page header is "Add/Remove Elements"
    const expectedHeaderTitle = 'Add/Remove Elements'
    const actualHeaderTitle = await getHeaderTitle(expectedHeaderTitle)
    assert.equal(actualHeaderTitle, expectedHeaderTitle, `Page header should be "${expectedHeaderTitle}"`)

    // Confirm the "Add Element" button is present, while the "Delete" button is not
    const addButton = await browser.$('button=Add Element')
    const isDisplayed = await addButton.waitForDisplayed()
    assert.isTrue(isDisplayed, 'Add Element button should be displayed')

    let deleteButtonExists = await browser.$('button=Delete').isExisting()
    assert.isFalse(deleteButtonExists, 'Delete button should not exist on the page')

    // Click the "Add Element" button 10 times.
    for (let i = 0; i < 10; i++) {
      await addButton.click()
    }

    // Assert that there are 10 delete buttons displayed
    const deleteButtons = await browser.$$('button=Delete')
    assert.strictEqual(deleteButtons.length, 10, 'Expected 10 delete buttons to be displayed')

    // Click each "Delete" button and confirm that the number of buttons reduces by one each time.
    for (let i = 0; i < deleteButtons.length; i++) {
      await deleteButtons[i].click()
      const remainingDeleteButtons = await browser.$$('button=Delete')
      assert.strictEqual(remainingDeleteButtons.length, 10 - i - 1, `Expected ${10 - i - 1} delete buttons remaining after clicking button number ${i + 1}`)
    }
    // Confirm that no "Delete" buttons are left on the page.
    deleteButtonExists = await browser.$('button=Delete').isExisting()
    assert.isFalse(deleteButtonExists, 'Delete button should not exist on the page')
  })
})
