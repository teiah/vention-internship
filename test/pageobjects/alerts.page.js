import { Page } from './page.js'

class AlertsPage extends Page {
  open() {
    return super.open('https://the-internet.herokuapp.com/javascript_alerts')
  }

  get jSAlertButton() {
    return $('button*=JS Alert')
  }

  get jSConfirmButton() {
    return $('button*=JS Confirm')
  }

  get jSPromptButton() {
    return $('button*=JS Prompt')
  }

  get resultMessage() {
    return $('//p[@id="result"]')
  }
}
export default new AlertsPage()
