import BaseElement from './BaseElement.js'

class CheckBox extends BaseElement {
  async check() {
    if (!(await this.isSelected())) {
      await this.click()
    }
  }

  async uncheck() {
    if (await this.isSelected()) {
      await this.click()
    }
  }

  async isSelected() {
    const element = await this.getElement()
    return element.isSelected()
  }
}

export default CheckBox
