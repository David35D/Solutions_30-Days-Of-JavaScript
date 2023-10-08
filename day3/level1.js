// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
const firstName = 'David';
const lastName = 'D';
const country = 'VE';
const age = 100;
const isMarried = false;

console.log('Exercise 1');
console.log(firstName, lastName, country, age, isMarried);

// 2. Check if type of '10' is equal to 10
console.log('Exercise 2');
console.log(typeof '10' === 10);

// 3. Check if parseInt('9.8') is equal to 10
console.log('Exercise 3');
console.log(parseInt('9.8') === 10);

// 4. Boolean value is either true or false.
//      i. Write three JavaScript statement which provide truthy value.
//      ii. Write three JavaScript statement which provide falsy value.
console.log('Exercise 4');

console.log('Truthy statements: ');

const truthyValue1 = 'Hello';
console.log('const truthyValue1 = \'Hello\' = ' + Boolean(truthyValue1));

const truthyValue2 = 42;
console.log('const truthyValue2 = 42 = ' + Boolean(truthyValue2));

const truthyValue3 = [1, 2, 3];
console.log('const truthyValue3 = [1, 2, 3] = ' + Boolean(truthyValue3));

console.log('Falsy statements: ');

const falsyValue1 = '';
console.log('const falsyValue1 = \'\' = ' + Boolean(falsyValue1));

const falsyValue2 = 0;
console.log('const falsyValue2 = 0 = ' + Boolean(falsyValue2));

const falsyValue3 = null;
console.log('const falsyValue3 = null = ' + Boolean(falsyValue3));

// 5. Figure out the result of the following comparison expression first without using console.log(). 
// After you decide the result confirm it using console.log()
console.log('Exercise 5');

console.log('i. 4 > 3 ' + 4 > 3);           // true
console.log('ii. 4 >= 3 ' + 4 >= 3);        // true
console.log('iii. 4 < 3 ' + 4 < 3);         // false
console.log('iv. 4 <= 3 ' + 4 <= 3);        // false
console.log('v. 4 == 4 ' + 4 == 4);         // true
console.log('vi. 4 === 4 ' + 4 === 4);      // true
console.log('vii. 4 != 4 ' + 4 != 4);       // false
console.log('viii. 4 !== 4 ' + 4 !== 4);    //false
console.log('ix. 4 != \'4\' ' + 4 != '4');   // true
console.log('x. 4 == \'4\' ' + 4 == '4');   // true
console.log('xi. 4 === \'4\' ' + 4 === '4');    // false
console.log(`xii. Find the length of python and jargon and make a falsy comparison statement.`);
console.log('python'.length > 'jargon'.length);

// 6. Figure out the result of the following comparison expression first without using console.log(). 
// After you decide the result confirm it using console.log()
console.log('Exercise 6');

console.log('i. 4 > 3 && 10 < 12 ' + 4 > 3 && 10 < 12);           // true
console.log('ii. 4 > 3 && 10 > 12 ' + 4 > 3 && 10 > 12);        // false
console.log('iii. 4 > 3 || 10 < 12 ' + 4 > 3 || 10 < 12);         // true
console.log('iv. 4 > 3 || 10 > 12 ' + 4 > 3 || 10 > 12);        // true
console.log('v. !(4 > 3) ' + !(4 > 3));         // false
console.log('vi. !(4 < 3) ' + !(4 < 3));      // true
console.log('vii. !(false) ' + !(false));       // true
console.log('viii. !(4 > 3 && 10 < 12) ' + !(4 > 3 && 10 < 12));    //false
console.log('ix. !(4 > 3 && 10 > 12) ' + !(4 > 3 && 10 > 12));   // true
console.log('x. !(4 === \'4\') ' + !(4 === '4'));   // true
console.log('xi There is no "on" in both dragon and python ' + !'dragon'.includes('on') && !'python'.includes('on') );    // false

// 7. Use the Date object to do the following activities
// i. What is the year today?
// ii. What is the month today as a number?
// iii. What is the date today?
// iv. What is the day today as a number?
// v. What is the hours now?
// vi. What is the minutes now?
// vii. Find out the numbers of seconds elapsed from January 1, 1970 to now.
const today = new Date();
console.log('Exercise 7');
console.log(today.getFullYear());
console.log(today.getMonth() + 1);
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getTime());
