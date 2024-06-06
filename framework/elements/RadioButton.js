import BaseElement from './BaseElement.js'
import Logger from '../logger/Logger.js'

class RadioButton extends BaseElement {
  async isSelected() {
    const element = await this.getElement()
    Logger.debug(`Checking if ${this.name} is selected`)
    const result = await element.isSelected()
    Logger.debug(`${this.name} is selected: ${result}`)
    return result
  }
}
export default RadioButton
