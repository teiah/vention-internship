import BaseElement from './BaseElement.js'
import Logger from '../logger/Logger.js'

class Dropdown extends BaseElement {
  async selectByVisibleText(text) {
    const element = await this.getElement(this.selector)
    await element.click()
    Logger.debug(`Select ${text} option from ${this.name}`)
    await element.selectByVisibleText(text)
  }
}
export default Dropdown
