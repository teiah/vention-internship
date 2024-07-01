import Table from '../../framework/elements/Table.js'
import Label from '../../framework/elements/Label.js'

class Battlefield {
  constructor() {
    this.battlefield = new Table('Battlefield', '//table[@class="battlefield"]')
    this.rowLabel = new Label('Table rows', '//div[@class="battlefield battlefield__rival"]//tr[@class="battlefield-row"]')
    this.cellLabel = new Label('Table cells', '//td')
  }
}

export default new Battlefield()
