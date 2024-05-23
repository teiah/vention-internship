import BaseElement from './BaseElement'

class RadioButton extends BaseElement {
  async isSelected() {
    const element = await this.getElement()
    return element.isSelected()
  }
}
export default RadioButton
