import Logger from '../../framework/logger/Logger.js'
import States from '../constants/states.js'
import GameMechanics from './GameMechanics.js'
import BattlefieldForm from '../pageobjects/./BattlefieldForm.js'

class AttackStrategy {
  async getBattlefieldState() {
    const battlefield = []
    const rowCount = 10
    const colCount = 10

    for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
      const rowArray = []
      for (let cellIndex = 0; cellIndex < colCount; cellIndex++) {
        const cell = BattlefieldForm.getCellByIndices(rowIndex, cellIndex)

        let state
        const classes = await cell.getAttribute('class', false)

        if (classes.includes(States.EMPTY)) {
          state = States.EMPTY
        } else if (classes.includes(States.MISS)) {
          state = States.MISS
        } else if (classes.includes(States.HIT)) {
          state = States.HIT
        }
        rowArray.push(state)
      }
      battlefield.push(rowArray)
    }
    Logger.debug('Battlefield state:\n' + GameMechanics.formatBattlefield(battlefield))
    return battlefield
  }

  getBestCell(battlefield) {
    const numRows = battlefield.length
    const numCols = battlefield[0].length
    let bestRating = 0
    const bestCellsArray = []

    for (let y = 0; y < numRows; y++) {
      for (let x = 0; x < numCols; x++) {
        if (battlefield[y][x] !== States.EMPTY) {
          continue
        }
        const rating = this.rateCell(x, y, battlefield)
        if (rating > bestRating) {
          bestCellsArray.length = 0
          bestCellsArray.push({ x, y })
          bestRating = rating
        } else if (rating === bestRating) {
          bestCellsArray.push({ x, y })
        }
      }
    }
    return bestCellsArray[Math.floor(Math.random() * bestCellsArray.length)]
  }

  rateCell(x, y, battlefield) {
    let score = 0
    if (battlefield[y][x] === States.EMPTY) {
      score++
    }

    const directions = [
      { dx: -1, dy: 0 }, // left
      { dx: 1, dy: 0 }, // right
      { dx: 0, dy: -1 }, // up
      { dx: 0, dy: 1 }, // down
    ]

    const numRows = battlefield.length
    const numCols = battlefield[0].length
    // Check each direction for adjacent hits
    for (const { dx, dy } of directions) {
      const newX = x + dx
      const newY = y + dy

      if (newX >= 0 && newX < numCols && newY >= 0 && newY < numRows) {
        if (battlefield[newY][newX] === States.HIT) {
          score++
        }
      }
    }
    return score
  }
}

export default new AttackStrategy()
