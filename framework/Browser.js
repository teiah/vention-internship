import { browser } from '@wdio/globals'

class Browser {
  async open(url) {
    await browser.url(url)
  }

  async getCurrentUrl() {
    return browser.getUrl()
  }

  async goBack() {
    await browser.back()
  }

  async goForward() {
    await browser.forward()
  }

  async refreshPage() {
    await browser.refresh()
  }

  async getPageTitle() {
    return browser.getTitle()
  }

  async getWindowHandle() {
    return browser.getWindowHandle()
  }

  async getWindowHandles() {
    return browser.getWindowHandles()
  }

  async closeWindow() {
    await browser.closeWindow()
  }

  async switchToFrame(frame) {
    await browser.switchToFrame(frame)
  }

  async getWindowSize() {
    return browser.getWindowSize()
  }

  async maximizeWindow() {
    await browser.maximizeWindow()
  }

  async minimizeWindow() {
    await browser.minimizeWindow()
  }

  async fullscreenWindow() {
    await browser.fullscreenWindow()
  }

  async setWindowSize(width, height) {
    await browser.setWindowSize(width, height)
  }

  async addCookie(cookie) {
    await browser.setCookies(cookie)
  }

  async deleteAllCookies() {
    await browser.deleteAllCookies()
  }

  async getCookies() {
    return browser.getCookies()
  }

  async getNamedCookie(name) {
    return browser.getCookies(name)
  }

  async deleteCookie(name) {
    await browser.deleteCookie(name)
  }

  async keys(keys) {
    await browser.keys(keys)
  }

  async dismissAlert() {
    await browser.dismissAlert()
  }

  async acceptAlert() {
    await browser.acceptAlert()
  }

  async getAlertText() {
    return browser.getAlertText()
  }

  async sendAlertText(text) {
    await browser.sendAlertText(text)
  }
}

export default new Browser()
