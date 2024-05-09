import { assert } from 'chai'
import CheckboxesPage from '../../pageobjects/checkboxes.page.js'

describe('Checkboxes exercise', function () {
  it('Should check/uncheck boxes', async function () {
    await CheckboxesPage.open()

    // Verify the page header is "Checkboxes".
    const expectedHeaderTitle = 'Checkboxes'
    const actualHeaderTitle = await CheckboxesPage.pageHeader.getText()
    assert.equal(actualHeaderTitle, expectedHeaderTitle, `Page header should be "${expectedHeaderTitle}"`)

    // Confirm that checkbox 1 and checkbox 2 are present, checkbox 1 is unchecked and checkbox 2 is checked.
    assert.isTrue(await CheckboxesPage.checkbox1.isDisplayed(), 'Checkbox 1 should be displayed')
    assert.isFalse(await CheckboxesPage.checkbox1.isSelected(), 'Checkbox 1 should be initially unchecked')

    assert.isTrue(await CheckboxesPage.checkbox2.isDisplayed(), 'Checkbox 2 should be displayed')
    assert.isTrue(await CheckboxesPage.checkbox2.isSelected(), 'Checkbox 2 should be initially checked')

    // Click checkbox 1 and confirm it is checked.
    await CheckboxesPage.checkbox1.click()
    assert.isTrue(await CheckboxesPage.checkbox1.isSelected(), 'Checkbox 1 should be checked after first click')

    // Click checkbox 1 again to ensure it is unchecked.
    await CheckboxesPage.checkbox1.click()
    assert.isFalse(await CheckboxesPage.checkbox1.isSelected(), 'Checkbox 1 should be unchecked after second click')

    // Click checkbox 2 again to confirm that both checkboxes are now unchecked.
    await CheckboxesPage.checkbox2.click()
    assert.isFalse(await CheckboxesPage.checkbox1.isSelected(), 'Checkbox 1 should be unchecked in the end')
    assert.isFalse(await CheckboxesPage.checkbox2.isSelected(), 'Checkbox 2 should be unchecked in the end')
  })
})
