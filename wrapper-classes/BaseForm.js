import { Timeouts } from '../constants/timeouts.js'

class BaseForm {
  constructor(name, selector) {
    this.name = name
    this.selector = selector
  }

  async isDisplayed() {
    const element = await $(this.selector)
    return await element.isDisplayed()
  }

  async isEnabled() {
    const element = await $(this.selector)
    return await element.isEnabled()
  }

  async waitForDisplayed() {
    const element = await $(this.selector)
    await element.waitForDisplayed(Timeouts.SHORT_TIMEOUT)
  }

  async waitForEnabled() {
    const element = await $(this.selector)
    await element.waitForEnabled(Timeouts.SHORT_TIMEOUT)
  }
}
export default BaseForm
