import Settings from '../pageobjects/Settings.js'
import Browser from '../../framework/Browser.js'
import Timeouts from '../constants/timeouts.js'
import LanguageMenu from '../pageobjects/LanguageMenu.js'

class SelectSettings {
  async selectEnglish() {
    await LanguageMenu.languageList.click()
    await LanguageMenu.englishLanguage.click()
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

  async placeShipsRandomly() {
    const clicks = Math.floor(Math.random() * 15) + 1
    for (let i = 0; i < clicks; i++) {
      await Settings.randomizeButton.click()
    }
  }

  async turnOnShootHint() {
    await Settings.shootHintCheckbox.check()
  }

  async turnOffShootHint() {
    await Settings.shootHintCheckbox.uncheck()
  }

  async turnOnCompactChat() {
    await Settings.compactChatCheckbox.check()
  }

  async turnOffCompactChat() {
    await Settings.compactChatCheckbox.uncheck()
  }

  async turnOnDesktopNotifications() {
    await Settings.desktopNotificationsCheckbox.check()
  }

  async chooseRandomOpponent() {
    await Settings.randomOpponentLink.check()
  }

  async chooseFriendOpponent() {
    await Settings.friendOpponentLink.check()
  }

  async openFriendOpponentUrl(url, id) {
    await Browser.open(url + id)
  }
}

export default new SelectSettings()
