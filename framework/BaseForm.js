import Label from '../elements/Label.js'

class BaseForm {
  constructor(name, selector) {
    this.name = name
    this.selector = selector
    this.label = new Label(this.selector, this.name)
  }

  async isDisplayed(timeout) {
    return await this.label.isDisplayed({ timeout })
  }

  async waitForDisplayed(timeout) {
    await this.label.waitForDisplayed({ timeout })
  }
}
export default BaseForm
