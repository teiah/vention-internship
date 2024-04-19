/* eslint-disable prefer-const */
import { Shape } from './shape.js'

export class Triangle extends Shape {
  constructor(base, height, sideA, sideB) {
    let name = 'triangle'
    super(name)
    this.base = base
    this.height = height
    this.sideA = sideA
    this.sideB = sideB
  }

  calculateArea() {
    console.log('The area is: ' + 0.5 * this.base * this.height)
  }

  isRightTriangle() {
    // Check if the triangle satisfies the Pythagorean theorem
    console.log(this.sideA ** 2 + this.sideB ** 2 === this.base ** 2)
  }
}
