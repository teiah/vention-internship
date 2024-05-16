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

  async close() {
    await this.browser.closeWindow()
  }

  async switchToFrame(frame) {
    await browser.switchToFrame(frame)
  }

  async getWindowSize() {
    await browser.getWindowSize()
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

  async getAllCookies() {
    return await browser.getCookies()
  }

  async addCookie(cookie) {
    await browser.setCookies(cookie)
  }

  async deleteAllCookies() {
    await browser.deleteAllCookies()
  }

  async getCookies() {
    return await browser.getCookies()
  }

  async getNamedCookie(name) {
    return await browser.getCookies(name)
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

export default Browser
