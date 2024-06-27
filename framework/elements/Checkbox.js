import BaseElement from './BaseElement.js'
import Logger from '../logger/Logger.js'

class CheckBox extends BaseElement {
  async check() {
    Logger.debug(`Checking ${this.name}`)
    if (!(await this.isSelected())) {
      await this.click()
    }
  }

  async uncheck() {
    Logger.debug(`Unchecking ${this.name}`)
    if (await this.isSelected()) {
      await this.click()
    }
  }

  async isSelected() {
    const element = await this.getElement()
    Logger.debug(`Checking if ${this.name} is selected`)
    const result = await element.isSelected()
    Logger.debug(`${this.name} is selected: ${result}`)
    return result
  }
}

export default CheckBox
