import BaseElement from '../BaseElement'

class Link extends BaseElement {
  async getUrl() {
    return await this.getElement().getAttribute('href')
  }
}
export default Link
