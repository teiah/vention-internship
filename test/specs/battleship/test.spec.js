import Browser from '../../../framework/Browser.js'
import Logger from '../../../framework/logger/Logger.js'
import Statuses from '../../constants/statuses.js'
import GameMechanics from '../../steps/GameMechanics.js'
import { assert } from 'chai'
import LanguageMenuForm from '../../pageobjects/LanguageMenuForm.js'
import Languages from '../../constants/languages.js'
import SettingsForm from '../../pageobjects/SettingsForm.js'
import GamePage from '../../pageobjects/GamePage.js'

const GAME_URL = 'https://battleship-game.org/zh'
const MAX_CLICKS = 15

describe('Battleship Game - Battlefield', function () {
  it('should win a game of Battleship', async function () {
    await Browser.open(GAME_URL)

    Logger.logStep('Preparing game.')
    await prepDefaultGame()

    Logger.logStep('Play a game of Battleship and aim to win.')
    const result = await GameMechanics.play()
    assert.equal(result, Statuses.GAME_WON, 'Game not won.')

    async function prepDefaultGame() {
      Logger.logStep('Switch to the English version and verify that it was selected.')
      await LanguageMenuForm.selectLanguage(Languages.ENGLISH.name, Languages.ENGLISH.code)
      assert.include(await Browser.getCurrentUrl(), Languages.ENGLISH.code, 'English site version should be shown')

      Logger.logStep('Verify that the "Mark verified empty cells" checkbox is checked')
      assert.isTrue(await SettingsForm.isShootHintChecked(), 'Mark verified empty cells is not checked')

      Logger.logStep('Select a random opponent.')
      await SettingsForm.chooseRandomOpponent()

      Logger.logStep('Randomly arrange ships by clicking the "Randomise" link a random number of times (between 1 and 15).')
      await placeShipsRandomly()

      Logger.logStep('Click "Play" and wait for another player to connect.')
      await GamePage.clickPlayButton()
    }

    async function placeShipsRandomly() {
      const clicks = Math.floor(Math.random() * MAX_CLICKS) + 1
      for (let i = 0; i < clicks; i++) {
        await SettingsForm.randomizeButton.click()
      }
    }
  })
})
