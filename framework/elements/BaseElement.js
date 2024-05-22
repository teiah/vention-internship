import { Timeouts } from '../../constants/timeouts'

class BaseElement {
  constructor(name, selector) {
    this.name = name
    this.selector = selector
  }

  async getElement() {
    return $(this.selector)
  }

  async waitForExist({ timeout = Timeouts.DEFAULT_WAIT_TIMEOUT, reverse = false, interval = Timeouts.WAIT_FOR_INTERVAL } = {}) {
    try {
      const element = await this.getElement()
      await element.waitForExist({ timeout, reverse, interval })
    } catch (e) {
      return false
    }
  }

  async waitForDisplayed({ timeout = Timeouts.DEFAULT_WAIT_TIMEOUT, reverse = false, interval = Timeouts.WAIT_FOR_INTERVAL } = {}) {
    try {
      const element = await this.getElement()
      await element.waitForDisplayed({ timeout, reverse, interval })
    } catch (e) {
      return false
    }
  }

  async waitForClickable({ timeout = Timeouts.DEFAULT_WAIT_TIMEOUT, reverse = false, interval = Timeouts.WAIT_FOR_INTERVAL } = {}) {
    try {
      const element = await this.getElement()
      await element.waitForClickable({ timeout, reverse, interval })
    } catch (e) {
      return false
    }
  }

  async waitForEnabled({ timeout = Timeouts.DEFAULT_WAIT_TIMEOUT, reverse = false, interval = Timeouts.WAIT_FOR_INTERVAL } = {}) {
    try {
      const element = await this.getElement()
      await element.waitForEnabled({ timeout, reverse, interval })
    } catch (e) {
      return false
    }
  }

  async isExisting({ timeout = Timeouts.DEFAULT_WAIT_TIMEOUT, reverse = false, interval = Timeouts.WAIT_FOR_INTERVAL } = {}) {
    const element = await this.getElement()
    return await element.waitForExist({ timeout, reverse, interval })
  }

  async isDisplayed({ timeout = Timeouts.DEFAULT_WAIT_TIMEOUT, reverse = false, interval = Timeouts.WAIT_FOR_INTERVAL } = {}) {
    const element = await this.getElement()
    return await element.waitForDisplayed({ timeout, reverse, interval })
  }

  async isClickable({ timeout = Timeouts.DEFAULT_WAIT_TIMEOUT, reverse = false, interval = Timeouts.WAIT_FOR_INTERVAL } = {}) {
    const element = await this.getElement()
    return await element.waitForClickable({ timeout, reverse, interval })
  }

  async isEnabled({ timeout = Timeouts.DEFAULT_WAIT_TIMEOUT, reverse = false, interval = Timeouts.WAIT_FOR_INTERVAL } = {}) {
    const element = await this.getElement()
    return await element.waitForEnabled({ timeout, reverse, interval })
  }

  async getCssProperty(propertyName) {
    const element = await this.getElement()
    return await element.getCSSProperty(propertyName).value
  }

  async getText() {
    const element = await this.getElement()
    return await element.getText()
  }

  async getValue() {
    const element = await this.getElement()
    return await element.getValue()
  }

  async getAttribute(attributeName) {
    const element = await this.getElement()
    return await element.getAttribute(attributeName)
  }

  async scrollIntoView() {
    const element = await this.getElement()
    await element.scrollIntoView()
  }

  async moveTo() {
    const element = await this.getElement()
    await element.moveTo()
  }

  async click({ button, x, y, skipRelease } = {}) {
    const element = await this.getElement()
    await element.click({ button, x, y, skipRelease })
  }

  async doubleClick() {
    const element = await this.getElement()
    await element.doubleClick()
  }

  async rightClick() {
    const element = await this.getElement()
    await element.click({ button: 'right' })
  }

  async dragAndDrop(targetSelector) {
    const element = await this.getElement()
    const targetElement = await $(targetSelector)
    await element.dragAndDrop(targetElement)
  }
}

export default BaseElement
