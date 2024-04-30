/* eslint-disable no-undef */
describe('Add/Remove Element exercise', () => {
  const { addRemoveElementHeader, addElementButton, deleteElementButton } = global.config.selectors
  before('Open browser', async () => {
    await browser.url('https://the-internet.herokuapp.com/add_remove_elements/')
    it('Should Add/Remove element', async () => {
      // Verify the page header is "Add/Remove Elements"
      const expectedHeaderTitle = 'Add/Remove Elements'
      await $(addRemoveElementHeader).waitForDisplayed()
      const actualHeaderTitle = await getElementText(addRemoveElementHeader)
      assert.equal(actualHeaderTitle, expectedHeaderTitle, `Page header should be "${expectedHeaderTitle}"`)
      // Confirm the "Add Element" button is present, while the "Delete" button is not
      const addButton = await $(addElementButton)
      assert.isTrue(await addButton.isDisplayed(), 'Add Element button should be displayed')

      assert.isFalse(await $(deleteElementButton).isExisting(), 'Delete button should not exist on the page')

      // Click the "Add Element" button 10 times.
      await addButton.waitForClickable()
      const numberOfExecutions = 10
      for (let i = 0; i < numberOfExecutions; i++) {
        await addButton.click()
      }

      // Assert that there are 10 delete buttons displayed
      const deleteButtons = await $$(deleteElementButton)
      assert.strictEqual(deleteButtons.length, numberOfExecutions, `Expected ${numberOfExecutions} delete buttons to be displayed`)

      // Click each "Delete" button and confirm that the number of buttons reduces by one each time.
      for (let i = 0; i < deleteButtons.length; i++) {
        await deleteButtons[i].waitForClickable()
        await deleteButtons[i].click()
        const remainingDeleteButtons = await $$(deleteElementButton)
        assert.strictEqual(
          remainingDeleteButtons.length,
          numberOfExecutions - i - 1,
          `Expected ${numberOfExecutions - i - 1} delete buttons remaining after clicking button number ${i + 1}`,
        )
      }
      // Confirm that no "Delete" buttons are left on the page.
      assert.isFalse(await $(deleteElementButton).isExisting(), 'Delete button should not exist on the page')
    })
  })
})
