import BaseElement from './BaseElement.js'
import Logger from '../logger/Logger.js'

class TextBox extends BaseElement {
  async getText() {
    const element = await this.getElement()
    const result = await element.getValue()
    Logger.debug(`Get text from ${this.name}: ${result}`)
    return result
  }

  async setText(value) {
    const element = await this.getElement()
    Logger.debug(`Set text in ${this.name} to: ${value}`)
    await element.setValue(value)
  }

  async clearText() {
    const element = await this.getElement()
    Logger.debug(`Clear text in ${this.name}`)
    await element.clearValue()
  }

  async appendText(value) {
    const element = await this.getElement()
    Logger.debug(`Append text in ${this.name} with: ${value}`)
    await element.addValue(value)
  }

  async isEmpty() {
    const element = await this.getElement()
    const text = await element.getText()
    const result = text.trim() === ''
    Logger.debug(`Check if ${this.name} is empty: ${result}`)
    return result
  }

  async isReadOnly() {
    const element = await this.getElement()
    const result = (await element.getAttribute('readonly')) === 'true'
    Logger.debug(`Check if ${this.name} is read-only`)
    return result
  }
}

export default TextBox
