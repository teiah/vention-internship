import { expect } from '@wdio/globals'

describe('Test different locators', () => {
  before(async () => {
    // Initialize browser
    await browser.url('https://www.novinite.bg/')
    // Wait for the button to be visible and clickable
    await browser.$('button[mode="primary"]').waitForClickable()
    await browser.$('button[mode="primary"]').click()
  })

  it('Id Attribute', async () => {
    const logo = await browser.$('#logo')
    await expect(logo).toBeDisplayed()
  })
  it('Name Attribute', async () => {
    const searchField = await browser.$('[name="query"]')
    await expect(searchField).toBeDisplayed()
  })
  it('Tag Name', async () => {
    const navBar = await browser.$('<nav />')
    await expect(navBar).toBeDisplayed()
  })
  it('Link Text', async () => {
    const econLink = await browser.$('=ECON')
    await expect(econLink).toHaveText('ECON')
    await expect(econLink).toHaveAttribute('href', 'https://econ.bg/')
  })
  it('Partial Link Text', async () => {
    const newsInEnglishLink = await browser.$('*=ENGLISH')
    await expect(newsInEnglishLink).toHaveText('NEWS IN ENGLISH')
    await expect(newsInEnglishLink).toHaveAttribute('href', 'https://www.novinite.com/')
    await newsInEnglishLink.saveScreenshot('screenshot.png')
  })
  it('CSS Selector', async () => {
    const privacyPolicy = await browser.$('a:first-of-type')
    await expect(privacyPolicy).toBeDisplayed()
  })
  it('Xpath', async () => {
    const noviniteRuLink = await browser.$("//a[contains(text(),'novinite.ru')]")
    await expect(noviniteRuLink).toBeDisplayed()
  })
})
