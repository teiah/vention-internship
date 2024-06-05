import BaseElement from './BaseElement.js'
import Logger from '../logger/Logger.js'

class CheckBox extends BaseElement {
  async check() {
    if (!(await this.isSelected())) {
      await this.click()
      Logger.debug(`${this.name} checked`)
    }
  }

  async uncheck() {
    if (await this.isSelected()) {
      await this.click()
      Logger.debug(`${this.name} unchecked`)
    }
  }

  async isSelected() {
    const element = await this.getElement()
    const result = await element.isSelected()
    Logger.debug(`Check if ${this.name} is selected: ${result}`)
    return result
  }
}

export default CheckBox
