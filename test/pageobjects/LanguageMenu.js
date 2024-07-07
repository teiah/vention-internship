import Label from '../../framework/elements/Label.js'
import Link from '../../framework/elements/Link.js'
import BaseForm from '../../framework/BaseForm.js'
import { $ } from '@wdio/globals'

class LanguageMenu extends BaseForm {
  constructor() {
    super('Language list', '//ul[@class="langs"]')
    this.languageList = new Label('Language list', '//ul[@class="langs"]')
    this.languageLink = new Link('Language link', '//a')
  }

  async openLanguageList() {
    await this.languageList.click()
  }

  async clickLanguage(language) {
    await $(`${this.languageLink.selector}[@title='${language}']`).click()
  }
}

export default new LanguageMenu()
