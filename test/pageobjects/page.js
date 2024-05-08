import { browser } from '@wdio/globals'

export class Page {
  open(path) {
    return browser.url(path)
  }

  get pageHeader() {
    return $('//h3')
  }

  get pageDescription() {
    return $('//p')
  }
}
