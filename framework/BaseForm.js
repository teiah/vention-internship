import Label from './elements/Label.js'

class BaseForm {
  constructor(name, selector) {
    this.name = name
    this.selector = selector
    this.label = new Label(name, selector)
  }

  async isDisplayed(timeout) {
    return this.label.isDisplayed({ timeout })
  }

  async waitForDisplayed(timeout) {
    await this.label.waitForDisplayed({ timeout })
  }
}
export default BaseForm
