import BaseElement from './BaseElement.js'

class Link extends BaseElement {
  async getUrl() {
    const element = await this.getElement()
    return await element.getAttribute('href')
  }
}
export default Link
