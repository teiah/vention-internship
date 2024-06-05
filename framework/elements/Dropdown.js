import BaseElement from './BaseElement.js'

class Dropdown extends BaseElement {
  async selectByVisibleText(text) {
    const element = await this.getElement(this.selector)
    await element.click()
    await element.selectByVisibleText(text)
  }
}
export default Dropdown
