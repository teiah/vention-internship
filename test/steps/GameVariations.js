import Logger from '../../framework/logger/Logger.js'
import { assert } from 'chai'
import Browser from '../../framework/Browser.js'
import GamePage from '../pageobjects/GamePage.js'
import Languages from '../constants/languages.js'
import SettingsForm from '../pageobjects/SettingsForm.js'

class GameVariations {
  async prepDefaultGame() {
    Logger.logStep('Switch to the English version and verify that it was selected.')
    await SettingsForm.selectLanguage(Languages.ENGLISH.name)
    assert.include(await Browser.getCurrentUrl(), Languages.ENGLISH.code, 'English site version should be shown')

    Logger.logStep('Verify that the "Mark verified empty cells" checkbox is checked')
    assert.isTrue(await SettingsForm.isShootHintChecked(), 'Mark verified empty cells is not checked')

    Logger.logStep('Select a random opponent.')
    await SettingsForm.chooseRandomOpponent()

    Logger.logStep('Randomly arrange ships by clicking the "Randomise" link a random number of times (between 1 and 15).')
    await SettingsForm.placeShipsRandomly()

    Logger.logStep('Click "Play" and wait for another player to connect.')
    await GamePage.startGame()
  }
}

export default new GameVariations()
