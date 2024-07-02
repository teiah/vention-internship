import { $, $$ } from '@wdio/globals'
import Logger from '../../framework/logger/Logger.js'
import States from '../constants/states.js'
import Battlefield from '../pageobjects/Battlefield.js'
import Label from '../../framework/elements/Label.js'
import GameMechanics from './GameMechanics.js'

class AttackStrategy {
  async getBattlefieldState() {
    const battlefield = []
    const rowCount = await $$(Battlefield.rowLabel.selector).length
    const colCount = await $$(`${Battlefield.rowLabel.selector}[1]${Battlefield.cellLabel.selector}`).length

    for (let rowIndex = 1; rowIndex <= rowCount; rowIndex++) {
      const rowArray = []
      for (let cellIndex = 1; cellIndex <= colCount; cellIndex++) {
        const cell = this.getCellByIndices(rowIndex, cellIndex)

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

  getCellByIndices(rowIndex, cellIndex) {
    const cellXPath = `${Battlefield.rowLabel.selector}[${rowIndex}]${Battlefield.cellLabel.selector}[${cellIndex}]`
    return new Label('Cell', cellXPath)
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

  async attackCell(x, y) {
    Logger.info(`Attacking cell x='${x}',y='${y}'`)
    // const cell = this.getCellByIndices(y + 1, x + 1)
    // this works too, but it's much slower
    const cell = await $(`${Battlefield.rowLabel.selector}//div[@data-y="${y}"][@data-x="${x}"]`)
    if (await cell.waitForClickable()) {
      await cell.click()
    }
  }
}

export default new AttackStrategy()
