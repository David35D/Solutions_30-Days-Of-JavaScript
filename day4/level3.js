// 1. Write a program which tells the number of days in a month.
// Enter a month: January
//January has 31 days.
//
// Enter a month: JANUARY
// January has 31 day
//
// Enter a month: February
// February has 28 days.
//
// Enter a month: FEbruary
// February has 28 days.
const month = window.prompt('Enter a month:');
const transformedMonth = month.toLowerCase().trim();
const outputMonth = `${transformedMonth.charAt(0).toUpperCase() + transformedMonth.substring(1 , transformedMonth.length)}`;

if (transformedMonth === 'january' 
    || transformedMonth === 'march' 
    || transformedMonth === 'may'
    || transformedMonth === 'july'
    || transformedMonth === 'august'
    || transformedMonth === 'october'
    || transformedMonth === 'december'
) {
    console.log(`${outputMonth}  has 31 days.`);
} else if (transformedMonth === 'february') {
    console.log(`${outputMonth} has 28 days`);
} else {
    console.log(`${outputMonth}  has 30 days.`);
}

// 2. Write a program which tells the number of days in a month, now consider leap year.
const year = window.prompt('Enter a year:');

let isLeap = 'false';

if ((year.trim() % 4 === 0 && year.trim() % 100 !== 0) || year.trim() % 400 === 0) {
    isLeap = true;
} else {
    isLeap = 'false';
}

if (transformedMonth === 'january' 
    || transformedMonth === 'march' 
    || transformedMonth === 'may'
    || transformedMonth === 'july'
    || transformedMonth === 'august'
    || transformedMonth === 'october'
    || transformedMonth === 'december'
) {
    console.log(`${outputMonth}  has 31 days.`);
} else if (transformedMonth === 'february') {
    console.log(`${outputMonth} has ${isLeap ? '29' : '28'} days`);
} else {
    console.log(`${outputMonth}  has 30 days.`);
}