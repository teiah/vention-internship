// for
console.log("Nested for loop output: ");
for (let i = 1; i < 5; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
        line += "#";
    }
    console.log(line);
}



// for ... in
// get key properties from object
let chair = {
    'type': 'office',
    'color': 'black',
    'material': 'mesh',
    'price': 1000,
}
console.log("Get keys from object with for..in...: ");
for (let item in chair) {
    console.log(item);
}

// get indexes from array
const numbers = [22, 1, 5, 8, 2, 30, 43];

console.log("Get indexes from array with for..in...: ");
for (let index in numbers) {
    console.log(index);
}
// get values from array
console.log("Get values from array with for..in...: ");
for (let index in numbers) {
    console.log(numbers[index]);
}

// for ... of
console.log("Get values from array with for..of...: ");
for (let number of numbers) {
    console.log(number);
}

// while 
console.log("While... output: ");
while (numbers.length < 10) {
    let sumOfLastTwoNumbers = numbers.at(-1) + numbers.at(-2);
    numbers.push(sumOfLastTwoNumbers);
}
console.log(numbers);


// do ... while
console.log("Do ... While... output: ");
do {
    numbers.push("will execute before checking the condition")
} while (numbers.length < 0);
console.log(numbers);