import { Timeouts } from '../../constants/timeouts.js'

class BaseElement {
  constructor(name, selector) {
    this.name = name
    this.selector = selector
  }

  async getElement() {
    return await $(this.selector)
  }

  async waitForExist() {
    await this.getElement().waitForExist(Timeouts.SHORT_TIMEOUT)
  }

  async waitForDisplayed() {
    await this.getElement().waitForDisplayed(Timeouts.SHORT_TIMEOUT)
  }

  async waitForClickable() {
    await this.getElement().waitForClickable(Timeouts.SHORT_TIMEOUT)
  }

  async waitForEnabled() {
    await this.getElement().waitForEnabled(Timeouts.SHORT_TIMEOUT)
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
