import Label from '../../framework/elements/Label.js'
import Logger from '../../framework/logger/Logger.js'

class BattlefieldForm {
  _getCellByIndices(y, x) {
    const cellXPath = `//div[@class="battlefield battlefield__rival"]//tr[@class="battlefield-row"]//div[@data-y="${y}"][@data-x="${x}"]/parent::td`
    return new Label('Cell', cellXPath)
  }

  async getCellClasses(rowIndex, cellIndex) {
    const cell = this._getCellByIndices(rowIndex, cellIndex)
    return cell.getAttribute('class')
  }

  async attackCell(y, x) {
    Logger.info(`Attacking cell x='${x}',y='${y}'`)
    await this._getCellByIndices(y, x).click()
  }
}

export default new BattlefieldForm()
