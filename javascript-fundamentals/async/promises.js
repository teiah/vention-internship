/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// resolve senario
function greet(name) {
  return new Promise(function (resolve, reject) {
    console.log('Hello, ' + name + '!')
    resolve()
  })
}

function sayGoodbye() {
  console.log('Goodbye!')
}

greet('Alice').then(sayGoodbye).catch(console.error)

// reject scenario
function divide(dividend, divisor) {
  return new Promise(function (resolve, reject) {
    if (divisor === 0) {
      reject('Cannot divide by zero!')
    } else {
      resolve(dividend / divisor)
    }
  })
}

function handleError(error) {
  console.error('Error occurred:', error)
}

divide(10, 0)
  .then(function (result) {
    console.log('Result:', result)
  })
  .catch(handleError)
