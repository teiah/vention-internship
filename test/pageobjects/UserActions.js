import GamePage from './GamePage.js'
import Browser from '../../framework/Browser.js'
import NotificationBox from './NotificationBox.js'
import States from '../constants/states.js'
import Battlefield from './Battlefield.js'
import { $, browser } from '@wdio/globals'
import Logger from '../../framework/logger/Logger.js'

class UserActions {
  async startGame() {
    return GamePage.playButton.click()
  }

  async startFriendGame() {
    await Browser.open('https://battleship-game.org/en/id29329647')
    await this.startGame()
  }

  rateEmptyCells(battlefield) {
    let bestCell = null
    const numRows = 10
    const numCols = 10

    // // Arrays to store all empty cells and cells adjacent to hits
    // const emptyCells = []
    //
    // // Directions for left, right, up, down
    // const directions = [
    //   { dx: -1, dy: 0 }, // left
    //   { dx: 1, dy: 0 }, // right
    //   { dx: 0, dy: -1 }, // up
    //   { dx: 0, dy: 1 }, // down
    // ]

    const cellRating = []
    let bestRating = 0
    const bestCellsArray = []

    // Iterate over each cell in the battlefield state
    for (let y = 0; y < numRows; y++) {
      const rowRating = []
      for (let x = 0; x < numCols; x++) {
        if (battlefield[y][x] !== 'empty') {
          continue
        }
        const rating = this.rateCell(x, y, battlefield)
        if (rating > bestRating) {
          bestCellsArray.length = 0
          bestCellsArray.push({ x, y })
          bestRating = rating
          bestCell = { x, y }
        } else if (rating === bestRating) {
          bestCellsArray.push({ x, y })
        }
        rowRating.push(rating)

        // // Check only empty cells
        // if (battlefield[y][x] === 'empty') {
        //   let foundAdjacentHit = false
        //
        //   // Check each direction for adjacent hits
        //   for (const { dx, dy } of directions) {
        //     const newX = x + dx
        //     const newY = y + dy
        //
        //     if (newX >= 0 && newX < numCols && newY >= 0 && newY < numRows) {
        //       // Check if the neighboring cell is a hit
        //       if (battlefield[newY][newX] === 'hit') {
        //         foundAdjacentHit = true
        //         bestCell = { x, y }
        //         return bestCell // Found an adjacent hit, return immediately
        //       }
        //     }
        //   }
        //
        //   // If no adjacent hits were found, add this empty cell to the list
        //   if (!foundAdjacentHit) {
        //     emptyCells.push({ x, y })
        //   }
        // }
      }
      cellRating.push(rowRating)
    }

    // If we didn't find any adjacent hits, select a random empty cell
    // if (emptyCells.length > 0) {
    //   const randomIndex = Math.floor(Math.random() * emptyCells.length)
    //   bestCell = emptyCells[randomIndex]
    // }
    // Logger.debug(cellRating)
    console.log(bestCell)
    return bestCellsArray[Math.floor(Math.random() * bestCellsArray.length)]
  }

  rateCell(x, y, battlefield) {
    let score = 0
    if (battlefield[y][x] === 'empty') {
      score++
    }

    const directions = [
      { dx: -1, dy: 0 }, // left
      { dx: 1, dy: 0 }, // right
      { dx: 0, dy: -1 }, // up
      { dx: 0, dy: 1 }, // down
    ]

    const numRows = 10
    const numCols = 10
    // Check each direction for adjacent hits
    for (const { dx, dy } of directions) {
      const newX = x + dx
      const newY = y + dy

      if (newX >= 0 && newX < numCols && newY >= 0 && newY < numRows) {
        // Check if the neighboring cell is a hit
        if (battlefield[newY][newX] === 'hit') {
          score++
        }
      }
    }
    // Logger.debug(`Score for ${x},${y} is ${score} `)

    return score
  }

  // Function to click on the cell
  async attack(battlefield) {
    // Get the best cell to click on
    const bestCell = this.rateEmptyCells(battlefield)
    const { x, y } = bestCell
    Logger.debug(`Attacking cell ${x},${y}`)
    // Use querySelector to find the element with matching data-x and data-y attributes
    const cellElement = await $(`.battlefield__rival .battlefield-cell-content[data-x="${x}"][data-y="${y}"]`)
    await cellElement.waitForClickable()
    await cellElement.click()
  }

  async waitForNotificationChange(oldText, timeout = 600000, interval = 2000) {
    await browser.waitUntil(
      async () => {
        const newText = await NotificationBox.getNotificationTextWithoutLog()
        return newText !== oldText
      },
      {
        timeout,
        timeoutMsg: 'Notification text did not change within the timeout period',
        interval,
      },
    )
  }

  async playGame() {
    let gameStatus
    do {
      gameStatus = await NotificationBox.checkGameStatus()
      if (gameStatus === States.YOUR_TURN || gameStatus === States.START_YOUR_TURN) {
        Logger.debug('Your turn')
        do {
          const battlefieldState = await Battlefield.getBattlefieldState()
          await this.attack(battlefieldState)
          gameStatus = await NotificationBox.checkGameStatus()
        } while (gameStatus === States.YOUR_TURN)
      }
      await this.waitForNotificationChange(gameStatus)
    } while (gameStatus !== States.GAME_WON || gameStatus !== States.ERROR || gameStatus !== States.GAME_LOST)
  }
}

export default new UserActions()
