import { $ } from '@wdio/globals'
import Logger from '../../framework/logger/Logger.js'
import States from '../constants/states.js'

class CellActions {
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

  async attackCell(x, y) {
    Logger.info(`Attacking cell x='${x}',y='${y}'`)
    const cell = await $(`.battlefield__rival .battlefield-cell-content[data-x="${x}"][data-y="${y}"]`)
    if (await cell.waitForClickable()) {
      await cell.click()
    }
  }
}

export default new CellActions()
