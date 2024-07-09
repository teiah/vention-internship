import Label from '../../framework/elements/Label.js'
import Link from '../../framework/elements/Link.js'
import BaseForm from '../../framework/BaseForm.js'

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

  async selectLanguage(language) {
    await this.openLanguageList()
    await this.clickLanguage(language)
  }
}

export default new LanguageMenuForm()
