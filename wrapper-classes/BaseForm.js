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

  async waitForDisplayed(selector, timeout = 5000) {
    const element = await $(this.selector)
    await element.waitForDisplayed({ timeout })
  }

  async waitForEnabled(selector, timeout = 5000) {
    const element = await $(this.selector)
    await element.waitForEnabled({ timeout })
  }
}
export default BaseForm
