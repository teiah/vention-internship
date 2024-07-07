import Label from '../../framework/elements/Label.js'
import Logger from '../../framework/logger/Logger.js'

class BattlefieldForm {
  constructor() {
    this.rowLabel = new Label('Table rows', '//div[@class="battlefield battlefield__rival"]//tr[@class="battlefield-row"]')
  }

  getCellByIndices(y, x) {
    const cellXPath = `${this.rowLabel.selector}//div[@data-y="${y}"][@data-x="${x}"]/parent::td`
    return new Label('Cell', cellXPath)
  }

  async attackCell(y, x) {
    Logger.info(`Attacking cell x='${x}',y='${y}'`)
    await this.getCellByIndices(y, x).click()
  }
}

export default new BattlefieldForm()
