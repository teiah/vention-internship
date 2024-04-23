import readline from 'readline'
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// Sample input: I love JavaScript
rl.question('Enter a string: ', (input) => {
  replaceSpaces(input)
  rl.close()
})

function replaceSpaces(str) {
  console.log(str.replaceAll(' ', '_'))
}
