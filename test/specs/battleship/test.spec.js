import Browser from '../../../framework/Browser.js'
import Logger from '../../../framework/logger/Logger.js'
import Statuses from '../../constants/statuses.js'
import GameVariations from '../../steps/GameVariations.js'
import GameMechanics from '../../steps/GameMechanics.js'
import { assert } from 'chai'

const gameUrl = 'https://battleship-game.org/zh'

describe('Battleship Game - Battlefield', function () {
  it('should win a game of Battleship', async function () {
    await Browser.open(gameUrl)

    Logger.logStep('Preparing game.')
    await GameVariations.prepDefaultGame()

    Logger.logStep('Play a game of Battleship and aim to win.')
    const result = await GameMechanics.play()
    assert.equal(result, Statuses.GAME_WON, 'Game not won.')
  })
})
