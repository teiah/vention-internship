export class AlertsPage {
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
