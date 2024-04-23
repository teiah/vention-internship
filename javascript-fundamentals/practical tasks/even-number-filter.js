import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function findEvenNumbers(numbers) {
  return numbers.filter((number) => number % 2 === 0)
}

rl.question('Enter numbers separated my commas: ', (input) => {
  const entries = JSON.parse(`[${input}]`)
  const output = findEvenNumbers(entries)
  console.log(output)
  rl.close()
})
