export class CheckboxesPage {
  get pageHeader() {
    return $('h3=Checkboxes')
  }

  get checkbox1() {
    return $('//form/input[1]')
  }

  get checkbox2() {
    return $('//form/input[2]')
  }
}
