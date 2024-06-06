import { Timeouts } from '../../test/constants/timeouts.js'
import { $ } from '@wdio/globals'
import Logger from '../logger/Logger.js'

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
      Logger.debug(`Wait for ${this.name} to ${reverse ? 'not exist' : 'exist'}`)
      const result = await element.waitForExist({ timeout, reverse, interval })
      Logger.debug(`${this.name} ${reverse ? 'does not exist' : 'exists'}: ${result}`)
      return result
    } catch (e) {
      Logger.error(`Error waiting for ${this.name} to exist: ${e}`)
      return false
    }
  }

  async waitForDisplayed({ timeout = Timeouts.DEFAULT_WAIT_TIMEOUT, reverse = false, interval = Timeouts.WAIT_FOR_INTERVAL } = {}) {
    try {
      const element = await this.getElement()
      Logger.debug(`Wait for ${this.name} to ${reverse ? 'not be displayed' : 'be displayed'}`)
      const result = await element.waitForDisplayed({ timeout, reverse, interval })
      Logger.debug(`${this.name} ${reverse ? 'is not displayed' : 'is displayed'}: ${result}`)
      return result
    } catch (e) {
      Logger.error(`Error waiting for ${this.name} to be displayed: ${e}`)
      return false
    }
  }

  async waitForClickable({ timeout = Timeouts.DEFAULT_WAIT_TIMEOUT, reverse = false, interval = Timeouts.WAIT_FOR_INTERVAL } = {}) {
    try {
      const element = await this.getElement()
      Logger.debug(`Wait for ${this.name} to ${reverse ? 'not be clickable' : 'be clickable'}`)
      const result = await element.waitForClickable({ timeout, reverse, interval })
      Logger.debug(`${this.name} ${reverse ? 'is not clickable' : 'is clickable'}: ${result}`)
      return result
    } catch (e) {
      Logger.error(`Error waiting for ${this.name} to be clickable: ${e}`)
      return false
    }
  }

  async waitForEnabled({ timeout = Timeouts.DEFAULT_WAIT_TIMEOUT, reverse = false, interval = Timeouts.WAIT_FOR_INTERVAL } = {}) {
    try {
      const element = await this.getElement()
      Logger.debug(`Wait for ${this.name} to ${reverse ? 'not be enabled' : 'be enabled'}`)
      const result = await element.waitForEnabled({ timeout, reverse, interval })
      Logger.debug(`${this.name} ${reverse ? 'is not enabled' : 'is enabled'}: ${result}`)
      return result
    } catch (e) {
      Logger.error(`Error waiting for ${this.name} to be enabled: ${e}`)
      return false
    }
  }

  async isExisting() {
    const element = await this.getElement()
    Logger.debug(`Check if ${this.name} is existing`)
    const result = await element.isExisting()
    Logger.debug(`${this.name} is existing: ${result}`)
    return result
  }

  async isDisplayed({ timeout = Timeouts.DEFAULT_WAIT_TIMEOUT, reverse = false, interval = Timeouts.WAIT_FOR_INTERVAL } = {}) {
    const element = await this.getElement()
    Logger.debug(`Check if ${this.name} is displayed`)
    const result = await element.waitForDisplayed({ timeout, reverse, interval })
    Logger.debug(`${this.name} ${reverse ? 'is not displayed' : 'is displayed'}: ${result}`)
    return result
  }

  async isClickable({ timeout = Timeouts.DEFAULT_WAIT_TIMEOUT, reverse = false, interval = Timeouts.WAIT_FOR_INTERVAL } = {}) {
    const element = await this.getElement()
    Logger.debug(`Checking if ${this.name} is clickable`)
    const result = await element.waitForClickable({ timeout, reverse, interval })
    Logger.debug(`${this.name} ${reverse ? 'is not clickable' : 'is clickable'}: ${result}`)

    return result
  }

  async isEnabled({ timeout = Timeouts.DEFAULT_WAIT_TIMEOUT, reverse = false, interval = Timeouts.WAIT_FOR_INTERVAL } = {}) {
    const element = await this.getElement()
    Logger.debug(`Checking if ${this.name} is enabled`)
    const result = await element.waitForEnabled({ timeout, reverse, interval })
    Logger.debug(`${this.name} ${reverse ? 'is not enabled' : 'is enabled'}: ${result}`)
    return result
  }

  async getCssProperty(propertyName) {
    const element = await this.getElement()
    Logger.debug(`Getting CSS property ${propertyName} of ${this.name}`)
    const result = await element.getCSSProperty(propertyName)
    Logger.debug(`${propertyName} of ${this.name}: ${result.value}`)
    return result
  }

  async getText() {
    const element = await this.getElement()
    Logger.debug(`Getting the text from ${this.name}`)
    const result = await element.getText()
    Logger.debug(`Text from ${this.name}: ${result}`)
    return result
  }

  async getValue() {
    const element = await this.getElement()
    Logger.debug(`Getting value from ${this.name}`)
    const result = await element.getValue()
    Logger.debug(`Value from ${this.name}: ${result}`)
    return result
  }

  async getAttribute(attributeName) {
    const element = await this.getElement()
    Logger.debug(`Getting ${attributeName} attribute from ${this.name}`)
    const result = await element.getAttribute(attributeName)
    Logger.debug(`${attributeName} attribute from ${this.name}: ${result}`)
    return result
  }

  async scrollIntoView() {
    const element = await this.getElement()
    Logger.debug(`Scrolling ${this.name} into view`)
    await element.scrollIntoView()
  }

  async moveTo() {
    const element = await this.getElement()
    Logger.debug(`Moving mouse to ${this.name}`)
    await element.moveTo()
  }

  async click({ button, x, y, skipRelease } = {}) {
    const element = await this.getElement()
    Logger.debug(`Clicking ${this.name}`)
    await element.click({ button, x, y, skipRelease })
  }

  async doubleClick() {
    const element = await this.getElement()
    Logger.debug(`Double clicking ${this.name}`)
    await element.doubleClick()
  }

  async rightClick() {
    const element = await this.getElement()
    Logger.debug(`Right clicking ${this.name}`)
    await element.click({ button: 'right' })
  }

  async dragAndDrop(targetSelector) {
    const element = await this.getElement()
    Logger.debug(`Moving ${this.name} to ${targetSelector}`)
    const targetElement = await $(targetSelector)
    await element.dragAndDrop(targetElement)
  }
}

export default BaseElement
