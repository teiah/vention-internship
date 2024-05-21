import BaseElement from '../BaseElement'

class RadioButton extends BaseElement {
  async isSelected() {
    return await this.getElement().isSelected()
  }
}
export default RadioButton
