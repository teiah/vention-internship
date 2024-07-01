import Browser from '../../../framework/Browser.js'
import Logger from '../../../framework/logger/Logger.js'
import GamePage from '../../pageobjects/GamePage.js'
import { assert } from 'chai'
import Statuses from '../../constants/statuses.js'
import Steps from '../../steps/GameMechanics.js'
import GameVariations from '../../steps/GameVariations.js'

const gameUrl = 'https://battleship-game.org/zh'

describe('Battleship Game - Battlefield', function () {
  it('should win a game of Battleship', async function () {
    await Browser.open(gameUrl)

    Logger.logStep('Preparing game.')
    await GameVariations.prepDefaultGame()

    Logger.logStep('Click "Play" and wait for another player to connect.')
    await GamePage.startGame()

    Logger.logStep('Play a game of Battleship and aim to win.')
    const result = await Steps.play()
    assert.equal(result, Statuses.GAME_WON, 'Game not won')
  })
})
