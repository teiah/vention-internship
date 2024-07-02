import Logger from '../../framework/logger/Logger.js'
import SelectSettings from './SelectSettings.js'
import LanguageMenu from '../pageobjects/LanguageMenu.js'
import { assert } from 'chai'
import Browser from '../../framework/Browser.js'
import Settings from '../pageobjects/Settings.js'

class GameVariations {
  async prepDefaultGame() {
    Logger.logStep('Switch to the English version and verify that it was selected.')
    await SelectSettings.selectEnglish()
    assert.equal(await Browser.getCurrentUrl(), 'https://battleship-game.org/en/', 'English site version should be shown')

    Logger.logStep('Verify that the "Mark verified empty cells" checkbox is checked')
    assert.isTrue(await Settings.isShootHintChecked(), 'Mark verified empty cells is not checked')

    Logger.logStep('Select a random opponent.')
    await SelectSettings.chooseRandomOpponent()

    Logger.logStep('Randomly arrange ships by clicking the "Randomise" link a random number of times (between 1 and 15).')
    await SelectSettings.placeShipsRandomly()
  }
}

export default new GameVariations()
