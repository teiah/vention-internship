import { rl } from './rl'

// simple if
const name = 'Teddy'
if (name) {
  console.log(`Hello, ${name}!`)
}

// if else
rl.question('How many cars do you own?\n', (input) => {
  const numberOfcars = parseInt(input)
  if (numberOfcars === 0) {
    console.log('You should get one!')
  } else if (numberOfcars === 1) {
    console.log('Yeah, me too!')
  } else if (numberOfcars > 1) {
    console.log('Why do you need more than 1?')
  } else {
    console.log("I don't know what you mean.")
  }
  rl.close()
})

/// multiple '?'
rl.question('How many cars do you own?\n', (numberOfCars) => {
  const message = parseInt(numberOfCars) < 1 ? 'You should get one!' : parseInt(numberOfCars) === 1 ? 'Yeah, me too!' : 'Why do you need more than 1?'
  console.log(message)
  rl.close()
})
