import Table from '../../framework/elements/Table.js'
import Label from '../../framework/elements/Label.js'
import Logger from '../../framework/logger/Logger.js'
import States from '../constants/states.js'


class Battlefield {
  constructor() {
    this.battlefield = new Table('Battlefield', '//table[@class="battlefield"]')
    this.rowLabel = new Label('Table rows', '.battlefield.battlefield__rival .battlefield-row')
  }

  async getRows() {
    return this.rowLabel.getElements()
  }

  async getBattlefieldState() {
    const battlefield = []
    const rows = await this.getRows()

    for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
      const rowArray = []
      const row = rows[rowIndex]

      const cells = await row.$$(' .battlefield-cell')

      for (let cellIndex = 0; cellIndex < cells.length; cellIndex++) {
        const cell = cells[cellIndex]

        let state
        const classes = await cell.getAttribute('class')

        if (classes.includes('battlefield-cell__empty')) {
          state = States.EMPTY
        }
        if (classes.includes('battlefield-cell__miss')) {
          state = States.MISS
        } else if (classes.includes('battlefield-cell__hit')) {
          state = States.HIT
        }

        rowArray.push(state)
      }

      battlefield.push(rowArray)
    }
    Logger.debug('Battlefield state:\n' + this.formatBattlefield(battlefield))
    return battlefield
  }

  formatBattlefield(battlefield) {
    return battlefield
      .map((row) =>
        row
          .map((cellState) => {
            if (cellState === 'empty') {
              return '.'
            } else if (cellState === 'miss') {
              return 'O'
            } else if (cellState === 'hit') {
              return 'X'
            }
          })
          .join(' '),
      )
      .join('\n')
  }
}

export default new Battlefield()
