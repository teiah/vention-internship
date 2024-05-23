import BaseElement from './BaseElement.js'

class TextBox extends BaseElement {
  async getText() {
    const element = await this.getElement()
    return element.getValue()
  }

  async setText(value) {
    const element = await this.getElement()
    await element.setValue(value)
  }

  async clearText() {
    const element = await this.getElement()
    await element.clearValue()
  }

  async appendText(value) {
    const element = await this.getElement()
    await element.addValue(value)
  }

  async isEmpty() {
    const element = await this.getElement()
    const text = await element.getText()
    return text.trim() === ''
  }

  async isReadOnly() {
    const element = await this.getElement()
    return (await element.getAttribute('readonly')) === 'true'
  }
}

export default TextBox
