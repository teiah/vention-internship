class BaseElement {
  constructor(name, selector) {
    this.name = name
    this.selector = selector
  }

  async getElement() {
    return await $(this.selector)
  }

  async waitForExist(selector, timeout = 5000) {
    await this.getElement().waitForExist({ timeout })
  }

  async waitForDisplayed(selector, timeout = 5000) {
    await this.getElement().waitForDisplayed({ timeout })
  }

  async waitForClickable(selector, timeout = 5000) {
    await this.getElement().waitForClickable({ timeout })
  }

  async waitForEnabled(selector, timeout = 5000) {
    await this.getElement().waitForEnabled({ timeout })
  }

  async select() {
    await this.getElement().click()
  }

  async isSelected() {
    return await this.getElement().isSelected()
  }

  async isExisting() {
    let isExisting
    try {
      isExisting = await this.getElement().isExisting()
    } catch (error) {
      return false
    }
    return isExisting
  }

  async isDisplayed() {
    let isDisplayed
    try {
      isDisplayed = await this.getElement().isDisplayed()
    } catch (error) {
      return false
    }
    return isDisplayed
  }

  async isClickable() {
    let isClickable
    try {
      isClickable = await this.getElement().isClickable()
    } catch (error) {
      return false
    }
    return isClickable
  }

  async isEnabled() {
    let isEnabled
    try {
      isEnabled = await this.getElement().isEnabled()
    } catch (error) {
      return false
    }
    return isEnabled
  }

  async getCssProperty(propertyName) {
    return await this.getElement().getCSSProperty(propertyName).value
  }

  async getText() {
    return await this.getElement().getText()
  }

  async getValue() {
    return await this.getElement().getValue()
  }

  async getAttribute(attributeName) {
    return await this.getElement().getAttribute(attributeName)
  }

  async scrollIntoView() {
    await this.getElement().scrollIntoView()
  }

  async moveTo() {
    await this.getElement().moveTo()
  }

  async click() {
    await this.getElement().click()
  }

  async doubleClick() {
    await this.getElement().doubleClick()
  }

  async rightClick() {
    await this.getElement().click({ button: 'right' })
  }

  async dragAndDrop(targetSelector) {
    const targetElement = await $(targetSelector)
    await this.getElement().dragAndDrop(targetElement)
  }
}

export default BaseElement
