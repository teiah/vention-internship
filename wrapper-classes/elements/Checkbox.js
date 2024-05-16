import BaseElement from '../BaseElement'

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
}

export default CheckBox
