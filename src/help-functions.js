export async function getHeaderTitle(expectedHeaderTitle) {
  const header = await browser.$(`h3=${expectedHeaderTitle}`)
  return header.getText()
}

export async function getDescriptionText(expectedDescription) {
  const description = await browser.$(`p=${expectedDescription}`)
  return description.getText()
}
