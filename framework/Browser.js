import { browser } from '@wdio/globals'
import Logger from './logger/Logger.js'
import Timeouts from '../test/constants/timeouts.js'

class Browser {
  async open(url) {
    Logger.debug(`Navigate to ${url}`)
    await browser.url(url)
  }

  async getCurrentUrl() {
    Logger.debug(`Getting current URL`)
    const currentUrl = await browser.getUrl()
    Logger.debug(`Current URL: ${currentUrl}`)
    return currentUrl
  }

  async goBack() {
    Logger.debug('Navigating back')
    await browser.back()
  }

  async goForward() {
    Logger.debug('Navigating forward')
    await browser.forward()
  }

  async refreshPage() {
    Logger.debug('Refreshing page')
    await browser.refresh()
  }

  async getPageTitle() {
    Logger.debug(`Getting page title`)
    const pageTitle = await browser.getTitle()
    Logger.debug(`Page title: ${pageTitle}`)
    return pageTitle
  }

  async getWindowHandle() {
    Logger.debug(`Getting current window handle`)
    const windowHandle = await browser.getWindowHandle()
    Logger.debug(`Current window handle: ${windowHandle}`)
    return windowHandle
  }

  async getWindowHandles() {
    Logger.debug(`Getting window handles`)
    const windowHandles = await browser.getWindowHandles()
    Logger.debug(`Window handles: ${windowHandles}`)
    return windowHandles
  }

  async closeWindow() {
    Logger.debug('Closing window')
    await browser.closeWindow()
  }

  async switchToFrame(frame) {
    Logger.debug(`Switching to frame: ${frame}`)
    await browser.switchToFrame(frame)
  }

  async getWindowSize() {
    Logger.debug(`Getting window size`)
    const windowSize = await browser.getWindowSize()
    Logger.debug(`Window size: ${windowSize.width}x${windowSize.height}`)
    return windowSize
  }

  async maximizeWindow() {
    Logger.debug('Maximizing window')
    await browser.maximizeWindow()
  }

  async minimizeWindow() {
    Logger.debug('Minimizing window')
    await browser.minimizeWindow()
  }

  async fullscreenWindow() {
    Logger.debug('Switching to fullscreen window')
    await browser.fullscreenWindow()
  }

  async setWindowSize(width, height) {
    Logger.debug(`Setting window size to ${width}x${height}`)
    await browser.setWindowSize(width, height)
  }

  async addCookie(cookie) {
    Logger.debug('Adding the cookie:', cookie)
    await browser.setCookies(cookie)
  }

  async deleteAllCookies() {
    Logger.debug('Deleting all cookies')
    await browser.deleteAllCookies()
  }

  async getCookies() {
    Logger.debug(`Getting cookies`)
    const cookies = await browser.getCookies()
    Logger.debug(`Cookies:`, cookies)
    return cookies
  }

  async getNamedCookie(name) {
    Logger.debug(`Getting cookie with name '${name}'`)
    const cookie = await browser.getCookies(name)
    Logger.debug(`Cookie with name '${name}':`, cookie)
    return cookie
  }

  async deleteCookie(name) {
    Logger.debug(`Deleting cookie: ${name}`)
    await browser.deleteCookie(name)
  }

  async keys(keys) {
    Logger.debug(`Sending keys: ${keys}`)
    await browser.keys(keys)
  }

  async dismissAlert() {
    Logger.debug('Dismissing alert')
    await browser.dismissAlert()
  }

  async acceptAlert() {
    Logger.debug('Accepting alert')
    await browser.acceptAlert()
  }

  async getAlertText() {
    Logger.debug(`Getting alert text`)
    const alertText = await browser.getAlertText()
    Logger.debug(`Alert text: ${alertText}`)
    return alertText
  }

  async sendAlertText(text) {
    Logger.debug(`Sending text to alert: ${text}`)
    await browser.sendAlertText(text)
  }

  async waitUntil(condition, { timeout = Timeouts.SHORT_TIMEOUT, interval = Timeouts.WAIT_FOR_INTERVAL } = {}) {
    try {
      Logger.debug(`Waiting until condition is met with timeout: ${timeout}ms and interval: ${interval}ms`)
      await browser.waitUntil(condition, { timeout, interval })
    } catch (e) {
      return false
    }
  }
}

export default new Browser()
