export async function getHeaderTitle(expectedHeaderTitle) {
  const header = await browser.$(`h3=${expectedHeaderTitle}`)
  return header.getText()
}
