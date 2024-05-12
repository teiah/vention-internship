import DynamicControlsPage from '../../pageobjects/dynamic-controls.page.js'
import { assert } from 'chai'
import { config } from '../../../wdio.conf.js'

describe('Dynamic controls exercise', function () {
  it('Should interact with dynamic controls', async function () {
    await DynamicControlsPage.open()

    // Click on the 'Remove' button next to a checkbox.
    await DynamicControlsPage.removeButton.click()

    // Wait until the message “It’s gone” appears.
    await DynamicControlsPage.confirmationMessage.waitForDisplayed({ timeout: config.waitforTimeout })

    // Verify that the checkbox is no longer present.
    assert.isFalse(await DynamicControlsPage.checkbox.isExisting(), 'Chechbox should not exist on the page')

    // Locate an input field.
    // Ensure that the input field is disabled.
    assert.isFalse(await DynamicControlsPage.inputField.isEnabled(), 'Input field should be initialy disabled.')

    // Click a button to enable the input.
    await DynamicControlsPage.enableButton.click()

    // Wait for the message “It's enabled!” to appear.
    await DynamicControlsPage.confirmationMessage.waitForDisplayed({ timeout: config.waitforTimeout })

    // Confirm that the input field is enabled.
    assert.isTrue(await DynamicControlsPage.inputField.isEnabled(), 'Input field should be enabled.')
  })
})
