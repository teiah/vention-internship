export async function getTextFromElement(element) {
  await element.isDisplayed()
  return element.getText()
}
export async function clickElement(element) {
  await element.waitForClickable()
  await element.click()
}
