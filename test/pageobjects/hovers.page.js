import { Page } from './page.js'

class HoversPage extends Page {
  open() {
    return super.open('https://the-internet.herokuapp.com/hovers')
  }

  get pageHeader() {
    return $('h3=Hovers')
  }

  get description() {
    return $('p=Hover over the image for additional information')
  }

  get profileContainersXpath() {
    return '//div[@class="figure"]'
  }

  get profileContainers() {
    return $$(this.profileContainersXpath)
  }

  getUserNameByIndex(index) {
    return $(`${this.profileContainersXpath}[${index}]//h5`)
  }

  getViewProfileLink(index) {
    return $(`${this.profileContainersXpath}[${index}]//a`)
  }

  getImageByIndex(index) {
    return $(`${this.profileContainersXpath}[${index}]//img`)
  }
}
export default new HoversPage()
