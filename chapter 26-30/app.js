// ............Question no 01............
// let number = parseFloat(prompt("Enter a positive number:"));
// console.log(`Number: ${number}`);
// console.log(`Round off value: ${Math.round(number)}`);
// console.log(`Floor value: ${Math.floor(number)}`);
// console.log(`Ceil value: ${Math.ceil(number)}`);


// ............Question no 02............
// let number = parseFloat(prompt("Enter a negative floating-point number:"));
// console.log(`Number: ${number}`);
// console.log(`Round off value: ${Math.round(number)}`);
// console.log(`Floor value: ${Math.floor(number)}`);
// console.log(`Ceil value: ${Math.ceil(number)}`);


// ............Question no 03............
// let number = parseFloat(prompt("Enter a number:"));
// let absoluteValue = Math.abs(number);
// console.log(`The absolute value of ${number} is ${absoluteValue}`);


// ............Question no 04............
// let diceValue = Math.floor(Math.random() * 6) + 1;
// console.log(`Random dice value: ${diceValue}`);


// ............Question no 05............
// let coinToss = Math.random();
// let coinValue = coinToss < 0.5 ? "Heads" : "Tails";
// console.log(`Random coin value: ${coinValue}`);


// ............Question no 06............
// let randomNumber = Math.floor(Math.random() * 100) + 1;
// console.log(`Random number between 1 and 100: ${randomNumber}`);


// ............Question no 07............
// let userWeight = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");
// let parsedWeight = parseFloat(userWeight.replace(/[^\d.-]/g, ''));
// console.log(`The weight of the user is ${parsedWeight} kilograms.`);


// ............Question no 08............
let secretNumber = Math.floor(Math.random() * 10) + 1;
let userInput = parseInt(prompt("Guess the secret number between 1 and 10:"));
if (userInput === secretNumber) {
    console.log("Congratulations! You guessed the secret number!");
} else {
    console.log(`Sorry, the secret number was ${secretNumber}. Better luck next time!`);
}
