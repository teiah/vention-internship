import Label from '../../framework/elements/Label.js'
import Link from '../../framework/elements/Link.js'
import BaseForm from '../../framework/BaseForm.js'
import Browser from '../../framework/Browser.js'
import Timeouts from '../constants/timeouts.js'

class LanguageMenu extends BaseForm {
  constructor() {
    super('Language list', '//ul[@class="langs"]')
    this.languageList = new Label('Language list', '//ul[@class="langs"]')
    this.englishLanguage = new Link('English', '//a[@title="English"]')
    this.chineseLanguage = new Link('Chinese', '//a[@title="Chinese"]')
  }

  async openLanguageList() {
    await this.languageList.click()
  }

  async selectEnglish() {
    await this.languageList.click()
    await this.englishLanguage.click()
    await Browser.waitUntil(
      async () => {
        const url = await Browser.getCurrentUrl()
        return url.includes('en')
      },
      {
        timeout: Timeouts.SHORT_TIMEOUT,
        timeoutMsg: 'English page did not load after 2 seconds',
      },
    )
  }
}

export default new LanguageMenu()
