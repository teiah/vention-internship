import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

function removeGeese(strings, geese) {
    return strings.filter(str => !geese.includes(str));
}

/* Sample input: "Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish" */

rl.question("Enter input: ", (input) => {
    const entries = JSON.parse(`[${input}]`);
    const output = removeGeese(entries, geese);
    console.log("Output:", output);
    rl.close();
});
