import BaseElement from '../BaseElement'

class Dropdown extends BaseElement {
  async selectByVisibleText(text) {
    const element = await this.getElement(this.selector)
    element.click()
    await element.selectByVisibleText(text)
  }
}
export default Dropdown
