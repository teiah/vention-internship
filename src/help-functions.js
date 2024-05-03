export async function getTextFromElement(element) {
  await element.isDisplayed()
  return element.getText()
}
