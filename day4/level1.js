// 1. Get user input using prompt(“Enter your age:”).
// If user is 18 or older , give feedback:'You are old enough to drive' but
// if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
//
// Enter your age: 30
// You are old enough to drive.
//
// Enter your age: 15
// You are left with 3 years to drive.
const userInput = window.prompt('Enter your age:');
console.log('Exercise 1');

if (userInput >= 18) {
    console.log('You are old enough to drive');
} else {
    console.log(`You are left with ${18 - userInput} years to drive.`);
}

// 2. Compare the values of myAge and yourAge using if … else. 
// Based on the comparison and log the result to console stating who is older (me or you). 
// Use prompt(“Enter your age:”) to get the age as input.
//
// Enter your age: 30
// You are 5 years older than me.
const age = window.prompt('Enter your age:');
const myAge = 25;
console.log('Exercise 2');

if (age > myAge) {
    console.log(`I'm older than you`);
} else if (age === myAge) {
    console.log(`We're the same age`);
} else {
    console.log(`You are ${age - myAge} years older than me.`);
}

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. 
// Try to implement it in two ways
// using if else
// ternary operator.
//
// let a = 4
// let b = 3
// 4 is greater than 3
let a = 4;
let b = 3;

console.log('Exercise 3');
console.log('Using if...else');
if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else if (a === b) {
    console.log(`${a} is equal to ${b}`);
} else {
    console.log(`${a} is less than ${b}`);
}

console.log('Using ternary operator');
console.log(a > b ? `${a} is greater than ${b}` : a === b ? `${a} is equal to ${b}` : `${a} is less than ${b}`);

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
// Enter a number: 2
// 2 is an even number
//
// Enter a number: 9
// 9 is is an odd number.
const number = window.prompt('Enter a number:');
console.log('Exercise 4');
console.log(number % 2 === 0 ? `${number} is an even number` : `${number} is an odd number`);