import Browser from '../../../framework/Browser.js'
import Logger from '../../../framework/logger/Logger.js'
import GamePage from '../../pageobjects/GamePage.js'
import LanguageMenu from '../../pageobjects/LanguageMenu.js'
import Settings from '../../pageobjects/Settings.js'
import { assert } from 'chai'
import Statuses from '../../constants/statuses.js'

describe('Battleship Game - Battlefield', function () {
  it('should win a game of Battleship', async function () {
    await Browser.open(GamePage.url)

    Logger.logStep('Switch to the English version and verify that it was selected.')
    await LanguageMenu.selectEnglish()
    assert.equal(await Browser.getCurrentUrl(), 'https://battleship-game.org/en/', 'English site version should be shown')

    Logger.logStep('Verify that the "Mark verified empty cells" checkbox is checked')
    assert.isTrue(await Settings.isShootHintChecked(), 'Mark verified empty cells is not checked')

    Logger.logStep('Select a random opponent.')
    await Settings.selectRandomOpponent()

    Logger.logStep('Randomly arrange ships by clicking the "Randomise" link a random number of times (between 1 and 15).')
    await Settings.placeShipsRandomly()

    Logger.logStep('Click "Play" and wait for another player to connect.')
    await GamePage.startGame()

    Logger.logStep('Play a game of Battleship and aim to win.')
    const result = await GamePage.play()
    await GamePage.handleEndGame(result)
    assert.equal(result, Statuses.GAME_WON, 'Game not won')
  })
})
