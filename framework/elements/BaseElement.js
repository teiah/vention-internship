import { Timeouts } from '../../constants/timeouts'

class BaseElement {
  constructor(name, selector) {
    this.name = name
    this.selector = selector
  }

  async getElement() {
    return await $(this.selector)
  }

  async waitForExist(timeout, reverse = false, interval) {
    try {
      await this.getElement().waitForExist({ timeout, reverse, interval: interval ?? Timeouts.WAIT_FOR_INTERVAL })
    } catch (error) {
      console.error('Error waiting for element to exist:', error)
      throw error
    }
  }

  async waitForDisplayed(timeout, reverse = false, interval) {
    try {
      await this.getElement().waitForDisplayed({ timeout, reverse, interval: interval ?? Timeouts.WAIT_FOR_INTERVAL })
    } catch (error) {
      console.error('Error waiting for element to be displayed:', error)
      throw error
    }
  }

  async waitForClickable(timeout, reverse = false, interval) {
    try {
      await this.getElement().waitForClickable({ timeout, reverse, interval: interval ?? Timeouts.WAIT_FOR_INTERVAL })
    } catch (error) {
      console.error('Error waiting for element to be clickable:', error)
      throw error
    }
  }

  async waitForEnabled(timeout, reverse = false, interval) {
    try {
      await this.getElement().waitForEnabled({ timeout, reverse, interval: interval ?? Timeouts.WAIT_FOR_INTERVAL })
    } catch (error) {
      console.error('Error waiting for element to be enabled:', error)
      throw error
    }
  }

  async isExisting(timeout) {
    return await this.getElement().isExisting({ timeout })
  }

  async isDisplayed(timeout) {
    return await this.getElement().isDisplayed({ timeout })
  }

  async isClickable(timeout) {
    return await this.getElement().isClickable({ timeout })
  }

  async isEnabled(timeout) {
    return await this.getElement().isEnabled({ timeout })
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
