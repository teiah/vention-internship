import Label from '../../framework/elements/Label.js'
import Link from '../../framework/elements/Link.js'
import BaseForm from '../../framework/BaseForm.js'

class LanguageMenu extends BaseForm {
  constructor() {
    super('Language list', '//ul[@class="langs"]')
    this.languageList = new Label('Language list', '//ul[@class="langs"]')
    this.englishLanguage = new Link('English', '//a[title="English"]')
    this.chineseLanguage = new Link('Chinese', '//a[title="Chinese"]')
  }

  async openLanguageList() {
    await this.languageList.click()
  }

  async selectEnglish() {
    await this.englishLanguage.click()
  }
}

export default new LanguageMenu()
