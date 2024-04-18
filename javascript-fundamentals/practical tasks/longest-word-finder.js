import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/* Sample input:
    "apple",
    "banana",
    "orange",
    "pineapple",
    "strawberry",
    "grape",
    "watermelon",
    "kiwi",
    "peach",
    "mango"
 */

rl.question("Enter words as JSON array: ", (input) => {
    const words = JSON.parse(`[${input}]`);
    findLongestWords(words);
    rl.close();
});

function findLongestWords(words) {
    let longestLength = 0;
    let longestWords = [];

    words.forEach(word => {
        const length = word.length;
        if (length > longestLength) {
            longestLength = length;
            longestWords = [word];
        }
        else if (length === longestLength) {
            longestWords.push(word);
        }
    });

    console.log(`\nLongest word(s) with ${longestLength} letters: ${longestWords}`);
}
