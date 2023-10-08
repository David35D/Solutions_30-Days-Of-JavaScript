// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// Enter base: 20
// Enter height: 10
// The area of the triangle is 100
const base = window.prompt('Enter base:');
const height = window.prompt('Enter height:');
console.log('Exercise 1');
console.log(`The are of the triangle is ${(base * height) / 2}`);

// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c).
// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12
const sideA = window.prompt('Enter side a:');
const sideB = window.prompt('Enter side b:');
const sideC = window.prompt('Enter side c:');
console.log('Exercise 2');
console.log(`The perimeter of the triangle is ${sideA + sideB + sideC}`);

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
const length = window.prompt('Enter length:');
const width = window.prompt('Enter width:');
console.log('Exercise 3');
console.log(`The perimeter of the rectangle is ${length * width * 2}`);

// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
const radius = window.prompt('Enter radius:');
console.log(`The area of the circle is ${(Math.PI * Math.pow(radius, 2)).toFixed(2)}`);
console.log(`The circumference of the circle is ${(2 * Math.PI * radius).toFixed(2)}`);

// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
const slopeExercise5 = 2;
const yInterceptExercise5 = -2;
const xInterceptExercise5 = -yInterceptExercise5 / slopeExercise5;

console.log('Exercise 5');
console.log('Slope:', slopeExercise5);
console.log('X-intercept:', xInterceptExercise5);
console.log('Y-intercept:', yInterceptExercise5);

// 6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
const slopeExercise6 = (10 - 2) / (6 - 2);
console.log('Exercise 6');
console.log(slopeExercise6);

// 7. Compare the slope of above two questions.
console.log('Exercise 7');
console.log(`The slope of exercise 5 is ${slopeExercise5 > slopeExercise6 ? 'greater' : 'not greater'} than the slope of exercise 6`);

// 8. Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
const a = 1;
const b = 6;
const c = 9;
const discriminant = Math.pow(b, 2) - (4 * (a * c));
const divisor = 2 * a;
const root1 = (-b + Math.sqrt(discriminant)) / divisor;
const root2 = (-b - Math.sqrt(discriminant)) / divisor;

console.log('Exercise 8');
console.log('Root 1: ', root1);
console.log('Root 2: ', root2);

// 9. Write a script that prompt a user to enter hours and rate per hour. Calculate weekly pay of the person?
// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
const hours = window.prompt('Enter hours:');
const rate = window.prompt('Enter rate per hour:');
const weeklyEarning = hours * rate;

console.log('Exercise 9');
console.log(`Your weekly earning is ${weeklyEarning}`);

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.
const firstName = 'David';
console.log('Exercise 10');
console.log(firstName.length > 7 ? 'Your name is long' : 'Your name is short');

// 11. Compare your first name length and your family name length and you should get this output.
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh
const lastName = 'D';
console.log('Exercise 11');
console.log(firstName > lastName ? `Your first name, ${`${firstName}, is longer than your family name, ${lastName}`}` : 'Your last name is longer');

// 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.
const myAge = 250;
const yourAge = 25;

console.log('Exercise 12');
const difference = Math.abs(myAge - yourAge);
console.log(myAge > yourAge ? `I am ${difference} years older than you` : `You are older`);

// 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// Enter birth year: 1995
// You are 25. You are old enough to drive
//
// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
const birthYear = window.prompt('Enter birth year:');
const age = 2023 - birthYear;
console.log('Exercsie 13');
console.log(age >= 18 ? `You are ${age}. You are old enough to drive` : `You are ${age}. You will be allowed to drive after ${18 - age} years.`);

// 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// Enter number of years you live: 100
// You lived 3153600000 seconds.
const yearsLived = window.prompt('Entere number of years you live:');
const secondsInAYear = 365 * 24 * 60 * 60;
const yearsLivedInSeconds = yearsLived * secondsInAYear;

console.log('Exercsie 14');
console.log(`You lived ${yearsLivedInSeconds} seconds.`);

// 15. Create a human readable time format using the Date time object
// i. YYYY-MM-DD HH:mm
// ii. DD-MM-YYYY HH:mm
// iii. DD/MM/YYYY HH:mm
const today = new Date();
const year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
let minutes = today.getMinutes();
let hour = today.getHours();

if (month <= 9) {
    month = `0${month}`; 
}

if (date <= 9) {
    date = `0${date}`;
}

if (minutes <= 9) {
    minutes = `0${minutes}`;
}

if (hour <= 9) {
    hour = `0${hour}`;
}


console.log('Exercsie 15');
console.log(`i. YYYY-MM-DD HH:mm = ${year}-${month}-${date} ${hour}:${minutes}`);
console.log(`ii. DD-MM-YYYY HH:mm = ${date}-${month}-${year} ${hour}:${minutes}`);
console.log(`iii. DD/MM/YYYY HH:mm = ${date}/${month}/${year} ${hour}:${minutes}`);