export class Shape {
  constructor(name) {
    this.name = name
  }

  describe() {
    console.log(`This is a ${this.name}.`)
  }

  calculateArea() {
    return 'Area calculation not implemented for this shape.'
  }
}
