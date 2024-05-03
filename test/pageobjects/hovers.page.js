export class HoversPage {
  get pageHeader() {
    return $('h3=Hovers')
  }

  get description() {
    return $('p=Hover over the image for additional information')
  }

  get viewProfileLink() {
    return $('=View profile')
  }

  getImageByNumber(number) {
    return $(`//div[@class="figure"][${number}]/img`)
  }

  getUserByName(name) {
    return $(`h5=name: ${name}`)
  }
}
