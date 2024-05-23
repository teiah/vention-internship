import BaseElement from './BaseElement.js'

class RadioButton extends BaseElement {
  async isSelected() {
    const element = await this.getElement()
    return element.isSelected()
  }
}
export default RadioButton
