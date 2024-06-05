import { Timeouts } from '../../test/constants/timeouts.js'
import { $ } from '@wdio/globals'
import Logger from '../logger/Logger.js'

class BaseElement {
  constructor(name, selector) {
    this.name = name
    this.selector = selector
  }

  async getElement() {
    Logger.debug(`Get ${this.name}`)
    return $(this.selector)
  }

  async waitForExist({ timeout = Timeouts.DEFAULT_WAIT_TIMEOUT, reverse = false, interval = Timeouts.WAIT_FOR_INTERVAL } = {}) {
    try {
      const element = await this.getElement()
      const result = await element.waitForExist({ timeout, reverse, interval })
      Logger.debug(`Wait for ${this.name} to exist: ${result}`)
      return result
    } catch (e) {
      Logger.error(`Error waiting for ${this.name} to exist: ${e}`)
      return false
    }
  }

  async waitForDisplayed({ timeout = Timeouts.DEFAULT_WAIT_TIMEOUT, reverse = false, interval = Timeouts.WAIT_FOR_INTERVAL } = {}) {
    try {
      const element = await this.getElement()
      const result = await element.waitForDisplayed({ timeout, reverse, interval })
      Logger.debug(`Wait for ${this.name} to be displayed: ${result}`)
      return result
    } catch (e) {
      Logger.error(`Error waiting for ${this.name} to be displayed: ${e}`)
      return false
    }
  }

  async waitForClickable({ timeout = Timeouts.DEFAULT_WAIT_TIMEOUT, reverse = false, interval = Timeouts.WAIT_FOR_INTERVAL } = {}) {
    try {
      const element = await this.getElement()
      const result = await element.waitForClickable({ timeout, reverse, interval })
      Logger.debug(`Wait for ${this.name} to be clickable: ${result}`)
      return result
    } catch (e) {
      Logger.error(`Error waiting for ${this.name} to be clickable: ${e}`)
      return false
    }
  }

  async waitForEnabled({ timeout = Timeouts.DEFAULT_WAIT_TIMEOUT, reverse = false, interval = Timeouts.WAIT_FOR_INTERVAL } = {}) {
    try {
      const element = await this.getElement()
      const result = await element.waitForEnabled({ timeout, reverse, interval })
      Logger.debug(`Wait for ${this.name} to be enabled: ${result}`)
      return result
    } catch (e) {
      Logger.error(`Error waiting for ${this.name} to be enabled: ${e}`)
      return false
    }
  }

  async isExisting() {
    const element = await this.getElement()
    const result = await element.isExisting()
    Logger.debug(`Check if ${this.name} is existing: ${result}`)
    return result
  }

  async isDisplayed({ timeout = Timeouts.DEFAULT_WAIT_TIMEOUT, reverse = false, interval = Timeouts.WAIT_FOR_INTERVAL } = {}) {
    const element = await this.getElement()
    const result = await element.waitForDisplayed({ timeout, reverse, interval })
    Logger.debug(`Check if ${this.name} is displayed: ${result}`)
    return result
  }

  async isClickable({ timeout = Timeouts.DEFAULT_WAIT_TIMEOUT, reverse = false, interval = Timeouts.WAIT_FOR_INTERVAL } = {}) {
    const element = await this.getElement()
    const result = await element.waitForClickable({ timeout, reverse, interval })
    Logger.debug(`Check if ${this.name} is clickable: ${result}`)
    return result
  }

  async isEnabled({ timeout = Timeouts.DEFAULT_WAIT_TIMEOUT, reverse = false, interval = Timeouts.WAIT_FOR_INTERVAL } = {}) {
    const element = await this.getElement()
    const result = await element.waitForEnabled({ timeout, reverse, interval })
    Logger.debug(`Check if ${this.name} is enabled: ${result}`)
    return result
  }

  async getCssProperty(propertyName) {
    const element = await this.getElement()
    const result = await element.getCSSProperty(propertyName)
    Logger.debug(`Get CSS property ${propertyName} of ${this.name}: ${result.value}`)
    return result
  }

  async getText() {
    const element = await this.getElement()
    const result = await element.getText()
    Logger.debug(`Get the text from ${this.name}: ${result}`)
    return result
  }

  async getValue() {
    const element = await this.getElement()
    const result = await element.getValue()
    Logger.debug(`Get value from ${this.name}: ${result}`)
    return result
  }

  async getAttribute(attributeName) {
    const element = await this.getElement()
    const result = await element.getAttribute(attributeName)
    Logger.debug(`Get ${attributeName} attribute from ${this.name}: ${result}`)
    return result
  }

  async scrollIntoView() {
    const element = await this.getElement()
    Logger.debug(`Scroll ${this.name} into view`)
    await element.scrollIntoView()
  }

  async moveTo() {
    const element = await this.getElement()
    Logger.debug(`Move mouse to ${this.name}`)
    await element.moveTo()
  }

  async click({ button, x, y, skipRelease } = {}) {
    const element = await this.getElement()
    Logger.debug(`Click ${this.name}`)
    await element.click({ button, x, y, skipRelease })
  }

  async doubleClick() {
    const element = await this.getElement()
    Logger.debug(`Double click ${this.name}`)
    await element.doubleClick()
  }

  async rightClick() {
    const element = await this.getElement()
    Logger.debug(`Right click ${this.name}`)
    await element.click({ button: 'right' })
  }

  async dragAndDrop(targetSelector) {
    const element = await this.getElement()
    Logger.debug(`Move ${this.name} to ${targetSelector}`)
    const targetElement = await $(targetSelector)
    await element.dragAndDrop(targetElement)
  }
}

export default BaseElement
