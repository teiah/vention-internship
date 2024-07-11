import Label from '../../framework/elements/Label.js'
import Link from '../../framework/elements/Link.js'
import BaseForm from '../../framework/BaseForm.js'
import Browser from '../../framework/Browser.js'
import Timeouts from '../constants/timeouts.js'

class LanguageMenuForm extends BaseForm {
  constructor() {
    super('Language list', '//ul[@class="langs"]')
    this.languageList = new Label('Language list', '//ul[@class="langs"]')
  }

  async openLanguageList() {
    await this.languageList.click()
  }

  _createLanguageLink(language) {
    const xpath = `//a[text()="${language}"]`
    return new Link('Language link', xpath)
  }

  async clickLanguage(language) {
    await this._createLanguageLink(language).click()
  }

  async selectLanguage(language, code) {
    await this.openLanguageList()
    await this.clickLanguage(language)
    await Browser.waitUntil(async () => (await Browser.getUrl()).includes(code), {
      timeout: Timeouts.SHORT_TIMEOUT,
      timeoutMsg: 'Expected URL to change after selecting language',
    })
  }
}

export default new LanguageMenuForm()
