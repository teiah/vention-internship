import BaseElement from './BaseElement.js'
import Logger from '../logger/Logger.js'

class RadioButton extends BaseElement {
  async isSelected() {
    const element = await this.getElement()
    const result = await element.isSelected()
    Logger.debug(`Check if ${this.name} is selected: ${result}`)
    return result
  }
}
export default RadioButton
