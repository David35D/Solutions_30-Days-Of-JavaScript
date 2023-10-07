// 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days of JavaScript';
console.log('Exercise 1 & 2');

// 2. Print the string on the browser console using console.log()
console.log(challenge);

// 3. Print the length of the string on the browser console using console.log()
console.log('Exercise 3');
console.log(challenge.length);

// 4. Change all the string characters to capital letters using toUpperCase() method
console.log('Exercise 4');
console.log(challenge.toUpperCase());

// 5. Change all the string characters to lowercase letters using toLowerCase() method
console.log('Exercise 5');
console.log(challenge.toLowerCase());

// 6. Cut (slice) out the first word of the string using substr() or substring() method
const firstWord = challenge.substring(3, 7);
console.log('Exercise 6');
console.log(firstWord);

// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
const sliced = challenge.slice(3, challenge.length);
console.log('Exercise 7');
console.log(sliced);

// 8. Check if the string contains a word Script using includes() method
console.log('Exercise 8');
console.log(challenge.includes('Script'));

// 9. Split the string into an array using split() method
// 10. Split by space space using split() method
const challengeArray = challenge.split(' ');
console.log('Exercise 9 & 10');
console.log(challengeArray);

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
const companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
const companiesArray = companies.split(', ');
console.log('Exercise 11');
console.log(companiesArray);

// 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log('Exercise 12');
console.log(challenge.replace('JavaScript', 'Python'));

// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log('Exercise 13');
console.log(challenge.charAt(15));

// 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
const J = challenge.indexOf('J');
console.log('Exercise 14');
console.log(challenge.charCodeAt(J));

// 15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
const firstA = challenge.indexOf('a');
console.log('Exercise 15');
console.log(firstA);

// 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
const lastA = challenge.lastIndexOf('a');
console.log('Exercise 16');
console.log(lastA);

// 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const because = 'You cannot end a sentence with because because because is a conjunction';
console.log('Exercise 17');
console.log(because.indexOf('because'));

// 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('Exercise 18');
console.log(because.lastIndexOf('because'));

// 19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('Exercise 19');
console.log(because.search('because'));

// 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
const whitespace = ' 30 Days Of JavaScript ';
console.log('Exercise 20');
console.log(whitespace.trim());

// 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log('Exercise 21');
console.log(challenge.startsWith('30'));

// 22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log('Exercise 22');
console.log(challenge.endsWith('ipt'));

// 23. Use match() method to find all the a’s in 30 Days Of JavaScript
const pattern = /a/gi;
console.log('Exercise 23');
console.log(challenge.match(pattern));
console.log(`There are ${challenge.match(pattern).length} letter a's in the string`);

// 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
const firstHalf = '30 Days of';
const secondHalf = 'JavaScript';
console.log('Exercise 24');
console.log(''.concat(firstHalf, ' ' ,secondHalf));

// 25. Use repeat() method to print 30 Days Of JavaScript 2 times
console.log('Exercise 25');
console.log(challenge.repeat(2));