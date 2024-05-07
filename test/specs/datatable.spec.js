import { expect } from '@wdio/globals'

describe('Identify any cell with email and column name', function () {
  before(async function () {
    await browser.url('https://the-internet.herokuapp.com/tables')
  })

  it('should verify cell for specific email with column name', async function () {
    const userData = [
      { 'Last Name': 'Doe', 'First Name': 'Jason', Email: 'jdoe@hotmail.com', 'Web Site': 'http://www.jdoe.com', Due: '$100.00' },
      { 'Last Name': 'Smith', 'First Name': 'John', Email: 'jsmith@gmail.com', 'Web Site': 'http://www.jsmith.com', Due: '$50.00' },
      { 'Last Name': 'Bach', 'First Name': 'Frank', Email: 'fbach@yahoo.com', 'Web Site': 'http://www.frank.com', Due: '$51.00' },
      { 'Last Name': 'Conway', 'First Name': 'Tim', Email: 'tconway@earthlink.net', 'Web Site': 'http://www.timconway.com', Due: '$50.00' },
    ]

    const columnName = ['Last Name', 'First Name', 'Email', 'Web Site', 'Due']

    for (const header of columnName) {
      const xPath = generateXPath(header)

      for (const row of userData) {
        const xPathWithEmail = xPath.replace('%EMAIL%', row.Email)

        const cellElement = await browser.$(xPathWithEmail)
        const cellText = await cellElement.getText()

        const expectedValue = row[header]

        expect(cellText).toEqual(expectedValue)
      }
    }
  })

  function generateXPath(header) {
    return `//table[@id="table1"]/tbody/tr[td[text()="%EMAIL%"]]/td[count(//table[@id="table1"]/thead/tr/th/span[text()="${header}"]/ancestor::th/preceding-sibling::th)+1]`
  }
})
