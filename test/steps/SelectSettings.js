import Settings from '../pageobjects/Settings.js'
import Browser from '../../framework/Browser.js'

class SelectSettings {
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
