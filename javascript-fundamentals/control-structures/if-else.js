import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// simple if
if (1) {
    console.log("Hello, world!")
}

// if else
rl.question("How many cars do you own?\n", (numberOfCars) => {

    if (parseInt(numberOfCars) < 1) {
        console.log("You should get one!");
    }
    else if (parseInt(numberOfCars) === 1) {
        console.log("Yeah, me too!");
    }
    else
        console.log("Why do you need more than 1?");

    rl.close();
});

/// multiple '?'
rl.question("How many cars do you own?\n", (numberOfCars) => {
    let message = (parseInt(numberOfCars) < 1) ? "You should get one!" :
        (parseInt(numberOfCars) === 1) ? "Yeah, me too!" :
            "Why do you need more than 1?";
    console.log(message);
    rl.close();
});
