/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
try {
  let object
  console.log(object.name)
} catch (err) {
  console.log('Try...catch... with error details: ')
  console.log(err.name)
  console.log(err.stack)
  console.log(err.message + '\n')
}

try {
  noSuchVariable
} catch {
  console.log('Try...catch omitting error details.\n')
}

try {
  let obj
  if (obj === undefined) {
    throw new TypeError('Throwing a TypeError.')
  }
  console.log("this line won't be executed")
} catch (error) {
  console.log('An error occurred:', error.message)
}

const arr = [1, 2, 3, 4, 5]

try {
  console.log(arr[2])
} catch (error) {
  console.log('An error occurred:', error.message)
} finally {
  console.log('Try...catch...finally executed.')
}
