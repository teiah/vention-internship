import BaseElement from './BaseElement.js'
import Logger from '../logger/Logger.js'

class Link extends BaseElement {
  async getUrl() {
    const element = await this.getElement()
    const result = await element.getAttribute('href')
    Logger.debug(`Get URL from ${this.name}: ${result}`)
    return result
  }
}
export default Link
