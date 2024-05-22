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
      await this.getElement().waitForExist({ timeout, reverse, interval })
    } catch (e) {
      return false
    }
  }

  async waitForDisplayed({ timeout = Timeouts.DEFAULT_WAIT_TIMEOUT, reverse = false, interval = Timeouts.WAIT_FOR_INTERVAL } = {}) {
    try {
      await this.getElement().waitForDisplayed({ timeout, reverse, interval })
    } catch (e) {
      return false
    }
  }

  async waitForClickable({ timeout = Timeouts.DEFAULT_WAIT_TIMEOUT, reverse = false, interval = Timeouts.WAIT_FOR_INTERVAL } = {}) {
    try {
      await this.getElement().waitForClickable({ timeout, reverse, interval })
    } catch (e) {
      return false
    }
  }

  async waitForEnabled({ timeout = Timeouts.DEFAULT_WAIT_TIMEOUT, reverse = false, interval = Timeouts.WAIT_FOR_INTERVAL } = {}) {
    try {
      await this.getElement().waitForEnabled({ timeout, reverse, interval })
    } catch (e) {
      return false
    }
  }

  async isExisting({ timeout = Timeouts.DEFAULT_WAIT_TIMEOUT, reverse = false, interval = Timeouts.WAIT_FOR_INTERVAL } = {}) {
    return await this.getElement().waitForExist({ timeout, reverse, interval })
  }

  async isDisplayed({ timeout = Timeouts.DEFAULT_WAIT_TIMEOUT, reverse = false, interval = Timeouts.WAIT_FOR_INTERVAL } = {}) {
    return await this.getElement().waitForDisplayed({ timeout, reverse, interval })
  }

  async isClickable({ timeout = Timeouts.DEFAULT_WAIT_TIMEOUT, reverse = false, interval = Timeouts.WAIT_FOR_INTERVAL } = {}) {
    return await this.getElement().waitForClickable({ timeout, reverse, interval })
  }

  async isEnabled({ timeout = Timeouts.DEFAULT_WAIT_TIMEOUT, reverse = false, interval = Timeouts.WAIT_FOR_INTERVAL } = {}) {
    return await this.getElement().waitForEnabled({ timeout, reverse, interval })
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

  async click({ button, x, y, skipRelease } = {}) {
    await this.getElement().click({ button, x, y, skipRelease })
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
