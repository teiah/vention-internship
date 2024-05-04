import { Page } from './page.js'

class AlertsPage extends Page {
  open() {
    return super.open('https://the-internet.herokuapp.com/javascript_alerts')
  }

  get pageHeader() {
    return $('h3=JavaScript Alerts')
  }

  get description() {
    return $('p=Here are some examples of different JavaScript alerts which can be troublesome for automation')
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

  get jSAlertMessage() {
    return $('p=You successfully clicked an alert')
  }

  get jSConfirmMessage() {
    return $('p=You clicked: Cancel')
  }

  get jSPromptMessage() {
    return $('p=You entered: Hello from test')
  }
}
export default new AlertsPage()
