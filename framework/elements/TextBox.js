import BaseElement from '../BaseElement'

class TextBox extends BaseElement {
  async getText() {
    return this.getElement().getValue()
  }

  async setText(value) {
    await this.getElement().setValue(value)
  }

  async clearText() {
    await this.getElement().clearValue()
  }

  async appendText(value) {
    await this.getElement().addValue(value)
  }

  async isEmpty() {
    const text = await this.getElement().getText()
    return text.trim() === ''
  }

  async isReadOnly() {
    return (await this.element.getAttribute('readonly')) === 'true'
  }
}

export default TextBox
