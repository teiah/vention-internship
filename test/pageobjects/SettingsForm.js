import Label from '../../framework/elements/Label.js'
import Button from '../../framework/elements/Button.js'
import Checkbox from '../../framework/elements/Checkbox.js'
import Link from '../../framework/elements/Link.js'
import LanguageMenu from './LanguageMenu.js'

class SettingsForm {
  constructor() {
    this.boxLabel = new Label('SettingsForm box', '//dl[@class="settings clearfix"]')
    this.randomizeButton = new Button('Randomize Button', '//span[@class="placeships-variant-link"and text()="Randomise"]')
    this.resetButton = new Button('Reset', '//span[@class="placeships-variant-link" and text()="Reset"]')
    this.archiveButton = new Button('Archive Button', '//span[@class="placeships-variant-link" and text()="Archive"]')
    this.settingsLabel = new Label('SettingsForm Label', '//dt[@class="settings-label"]')
    this.shootHintLabel = new Label('Shoot hint label', 'label[@for="setting__shoothint"]')
    this.shootHintCheckbox = new Checkbox('Shoot hint checkbox', '//input[@id="setting__shoothint"]')
    this.compactChatLabel = new Label('Compact chat label', '//label[@for="setting__compactchat"]')
    this.compactChatCheckbox = new Checkbox('Compact chat checkbox', '//input[@id="setting__compactchat"]')
    this.desktopNotificationsLabel = new Label('Desktop notifications label', '//label[@for="setting__notifications"]')
    this.desktopNotificationsCheckbox = new Checkbox('Desktop notifications checkbox', '//input[@id="setting__notifications"]')
    this.soundLabel = new Label('Sound label', '//label[@for="setting__sound"]')
    this.soundCheckbox = new Checkbox('Sound checkbox', '//input[@id="setting__sound"]')
    this.randomOpponentLink = new Link('Random opponent', '//a[text()="random"]')
    this.friendOpponentLink = new Link('Friend opponent', '//a[text()="friend"]')
  }

  async isShootHintChecked() {
    return this.shootHintCheckbox.isSelected()
  }

  async selectLanguage(language) {
    await LanguageMenu.openLanguageList()
    await LanguageMenu.clickLanguage(language)
  }

  async placeShipsRandomly() {
    const clicks = Math.floor(Math.random() * 15) + 1
    for (let i = 0; i < clicks; i++) {
      await this.randomizeButton.click()
    }
  }

  async turnOnShootHint() {
    await this.shootHintCheckbox.check()
  }

  async turnOffShootHint() {
    await this.shootHintCheckbox.uncheck()
  }

  async turnOnCompactChat() {
    await this.compactChatCheckbox.check()
  }

  async turnOffCompactChat() {
    await this.compactChatCheckbox.uncheck()
  }

  async turnOnDesktopNotifications() {
    await this.desktopNotificationsCheckbox.check()
  }

  async chooseRandomOpponent() {
    await this.randomOpponentLink.check()
  }

  async chooseFriendOpponent() {
    await this.friendOpponentLink.check()
  }
}

export default new SettingsForm()
