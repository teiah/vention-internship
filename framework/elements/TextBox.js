import BaseElement from './BaseElement.js'
import Logger from '../logger/Logger.js'

class TextBox extends BaseElement {
  async getText() {
    const element = await this.getElement()
    Logger.debug(`Getting text from ${this.name}`)
    const result = await element.getValue()
    Logger.debug(`Text from ${this.name}: ${result}`)
    return result
  }

  async setText(value) {
    const element = await this.getElement()
    Logger.debug(`Setting text in ${this.name} to: ${value}`)
    await element.setValue(value)
  }

  async clearText() {
    const element = await this.getElement()
    Logger.debug(`Clearing text in ${this.name}`)
    await element.clearValue()
  }

  async appendText(value) {
    const element = await this.getElement()
    Logger.debug(`Appending text in ${this.name} with: ${value}`)
    await element.addValue(value)
  }

  async isEmpty() {
    const element = await this.getElement()
    const text = await element.getText()
    Logger.debug(`Checking if ${this.name} is empty`)
    const result = text.trim() === ''
    Logger.debug(`${this.name} is empty: ${result}`)
    return result
  }

  async isReadOnly() {
    const element = await this.getElement()
    Logger.debug(`Checking if ${this.name} is read-only`)
    const result = (await element.getAttribute('readonly')) === 'true'
    Logger.debug(`${this.name} is read-only: ${result}`)
    return result
  }
}

export default TextBox
