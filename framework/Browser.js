import { browser } from '@wdio/globals'
import Logger from './logger/Logger.js'

class Browser {
  async open(url) {
    Logger.debug(`Navigate to ${url}`)
    await browser.url(url)
  }

  async getCurrentUrl() {
    const currentUrl = browser.getUrl()
    Logger.debug(`Current URL: ${currentUrl}`)
    return currentUrl
  }

  async goBack() {
    Logger.debug('Navigate back')
    await browser.back()
  }

  async goForward() {
    Logger.debug('Navigate forward')
    await browser.forward()
  }

  async refreshPage() {
    Logger.debug('Refresh page')
    await browser.refresh()
  }

  async getPageTitle() {
    const pageTitle = await browser.getTitle()
    Logger.debug(`Page title: ${pageTitle}`)
    return pageTitle
  }

  async getWindowHandle() {
    const windowHandle = await browser.getWindowHandle()
    Logger.debug(`Current window handle: ${windowHandle}`)
    return windowHandle
  }

  async getWindowHandles() {
    const windowHandles = await browser.getWindowHandles()
    Logger.debug(`Window handles: ${windowHandles}`)
    return windowHandles
  }

  async closeWindow() {
    Logger.debug('Close window')
    await browser.closeWindow()
  }

  async switchToFrame(frame) {
    Logger.debug(`Switch to frame: ${frame}`)
    await browser.switchToFrame(frame)
  }

  async getWindowSize() {
    const windowSize = await browser.getWindowSize()
    Logger.debug(`Window size: ${windowSize.width}x${windowSize.height}`)
    return windowSize
  }

  async maximizeWindow() {
    Logger.debug('Maximize window')
    await browser.maximizeWindow()
  }

  async minimizeWindow() {
    Logger.debug('Minimize window')
    await browser.minimizeWindow()
  }

  async fullscreenWindow() {
    Logger.debug('Switch to fullscreen window')
    await browser.fullscreenWindow()
  }

  async setWindowSize(width, height) {
    Logger.debug(`Set window size to ${width}x${height}`)
    await browser.setWindowSize(width, height)
  }

  async addCookie(cookie) {
    Logger.debug('Add the cookie:', cookie)
    await browser.setCookies(cookie)
  }

  async deleteAllCookies() {
    Logger.debug('Delete all cookies')
    await browser.deleteAllCookies()
  }

  async getCookies() {
    const cookies = await browser.getCookies()
    Logger.debug(`Cookies:`, cookies)
    return cookies
  }

  async getNamedCookie(name) {
    const cookie = await browser.getCookies(name)
    Logger.debug(`Cookie with name '${name}':`, cookie)
    return cookie
  }

  async deleteCookie(name) {
    Logger.debug(`Delete cookie: ${name}`)
    await browser.deleteCookie(name)
  }

  async keys(keys) {
    Logger.debug(`Send keys: ${keys}`)
    await browser.keys(keys)
  }

  async dismissAlert() {
    Logger.debug('Dismiss alert')
    await browser.dismissAlert()
  }

  async acceptAlert() {
    Logger.debug('Accept alert')
    await browser.acceptAlert()
  }

  async getAlertText() {
    const alertText = await browser.getAlertText()
    Logger.debug(`Alert text: ${alertText}`)
    return alertText
  }

  async sendAlertText(text) {
    Logger.debug(`Send text to alert: ${text}`)
    await browser.sendAlertText(text)
  }
}

export default new Browser()
