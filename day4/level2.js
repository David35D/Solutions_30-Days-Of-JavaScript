// 1. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
const score = 100;

console.log('Exercise 1');
if (score <= 100 && score >= 80) {
    console.log('A');
} else if (score <= 89 && score >= 70) {
    console.log('B');
} else if (score <= 69 && score >= 60) {
    console.log('C');
} else if (score <= 59 && score >= 50) {
    console.log('D');
} else if (score >= 0) {
    console.log('F');
}

// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
const userInput = window.prompt('Entere a month:');
const transformedUserInput = userInput.trim().toLowerCase();

console.log('Exercise 2');
if (transformedUserInput === 'september' || transformedUserInput === 'october' || transformedUserInput === 'november') {
    console.log('Autumn');
} else if (transformedUserInput === 'december' || transformedUserInput === 'january' || transformedUserInput === 'february') {
    console.log('Winter');
} else if (transformedUserInput === 'march' || transformedUserInput === 'april' || transformedUserInput === 'may') {
    console.log('Spring');
} else if (transformedUserInput === 'june' || transformedUserInput === 'july' || transformedUserInput === 'august') {
    console.log('Summer');
}

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
// What is the day  today? Saturday
// Saturday is a weekend.
//
// What is the day today? saturDaY
// Saturday is a weekend.
//
// What is the day today? Friday
// Friday is a working day.
//
// What is the day today? FrIDAy
// Friday is a working day.
const day = window.prompt('What is the day today?');
const transformedDay = day.toLowerCase().trim();
const outputDay = `${transformedDay.charAt(0).toUpperCase() + transformedDay.substring(1 , transformedDay.length)}`;

console.log('Exercise 3');
let isWorkingDay = true;

if (transformedDay === 'saturday' || transformedDay === 'sunday') {
    isWorkingDay = false;
}

console.log(`${outputDay} is a ${isWorkingDay ? 'working day.' : 'weekend.'}`);