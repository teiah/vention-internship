import { assert } from 'chai'
import { browser } from '@wdio/globals'

describe('Checkboxes exercise', () => {
  it('Should check/uncheck boxes', async () => {
    await browser.url('https://the-internet.herokuapp.com/checkboxes')

    // Verify the page header is "Checkboxes".
    const header = await browser.$('h3=Checkboxes')
    const actualHeaderTitle = await header.getText()
    const expectedHeaderTitle = 'Checkboxes'
    assert.equal(actualHeaderTitle, expectedHeaderTitle, 'Page header should be "Checkboxes"')

    // Confirm that checkbox 1 and checkbox 2 are present, checkbox 1 is unchecked and checkbox 2 is checked.
    const checkbox1 = await browser.$('//form/input[1]')
    let isDisplayed = await checkbox1.waitForDisplayed()
    assert.isTrue(isDisplayed, 'Checkbox 1 should be displayed')
    let isChecked = await checkbox1.isSelected()
    assert.equal(isChecked, false)

    const checkbox2 = await browser.$('//form/input[2]')
    isDisplayed = await checkbox2.waitForDisplayed()
    assert.isTrue(isDisplayed, 'Checkbox 2 should be displayed')
    isChecked = await checkbox2.isSelected()
    assert.equal(isChecked, true)

    // Click checkbox 1 and confirm it is checked.
    checkbox1.click()
    isChecked = await checkbox1.isSelected()
    assert.equal(isChecked, true)

    // Click checkbox 1 again to ensure it is unchecked.
    checkbox1.click()
    isChecked = await checkbox1.isSelected()
    assert.equal(isChecked, false)

    // Click checkbox 2 again to confirm that both checkboxes are now unchecked.
    checkbox1.click()
    checkbox2.click()
    isChecked = await checkbox1.isSelected()
    assert.equal(isChecked, false)
    isChecked = await checkbox2.isSelected()
    assert.equal(isChecked, false)
  })
})
