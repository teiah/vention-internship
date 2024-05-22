import BaseElement from '../BaseElement'

class RadioButton extends BaseElement {
  async isSelected() {
    const element = await this.getElement()
    return await element.isSelected()
  }
}
export default RadioButton
