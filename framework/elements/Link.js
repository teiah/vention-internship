import BaseElement from './BaseElement.js'
import Logger from '../logger/Logger.js'

class Link extends BaseElement {
  async getUrl() {
    const element = await this.getElement()
    Logger.debug(`Getting URL from ${this.name}`)
    const result = await element.getAttribute('href')
    Logger.debug(`URL from ${this.name}: ${result}`)
    return result
  }
}
export default Link
