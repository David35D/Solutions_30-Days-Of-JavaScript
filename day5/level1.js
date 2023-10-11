const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
  
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

// 1. Declare an empty array
const exercise1Array = [];
console.log('Exercise 1');
console.log(exercise1Array);

// 2. Declare an array with more than 5 number of elements
const numbers = [1, 2, 3, 4, 5, 99];
console.log('Exercise 2');
console.log(numbers);

// 3. Find the length of your array'
console.log('Exercise 3');
console.log(numbers.length);

// 4. Get the first item, the middle item and the last item of the array
const firstItem = numbers[0];
const middleItem = numbers[Math.floor(numbers.length / 2)];
const lastItem = numbers[numbers.length - 1];

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ['David', true, 155, null, undefined, NaN];
console.log('Exercise 5');


// 6. Declare an array variable name it companies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// 7. Print the array using console.log()
// 8. Print the number of companies in the array
// 9. Print the first company, middle and last company
// 10. 11. Print out each company, Change each company name to uppercase one by one and print them out
const companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log('Exercise 6, 7, 8, 9, 10 & 11');
console.log(companies);
console.log(companies.length);
console.log(companies[0]);
console.log(companies[Math.floor(companies.length / 2)])
console.log(companies[companies.length - 1]);
console.log(companies[0].toUpperCase().toUpperCase(), companies[1].toUpperCase(), companies[2].toUpperCase(), companies[3].toUpperCase(), companies[4].toUpperCase(), companies[5].toUpperCase(), companies[6].toUpperCase());

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
const companiesWithoutAmazon = companies.slice(0, companies.length - 1);
const joinedCompaniesWithoutAmazon = companiesWithoutAmazon.join(', ');
const companiesSentence = `${joinedCompaniesWithoutAmazon} and ${companies[companies.length - 1]} are big IT companies`;
console.log('Exercise 12');
console.log(companiesSentence);

// 13. Check if a certain company exists in the companies array. If it exist return the company else return a company is not found
console.log('Exercise 13');
if (companies.includes('Netflix')) {
    console.log(true);
} else {
    console.log('Netflix is not found.');
}

// 14. Filter out companies which have more than one 'o' without the filter method
const filteredCompanies = [];
console.log('Exercise 14');
for (let i = 0; i < companies.length; i++) {
    const company = companies[i];
    
    let count = 0;
    
    // Count the number of 'o' occurrences in the company name
    for (let j = 0; j < company.length; j++) {
      if (company[j].toLowerCase() === 'o') {
        count++;
      }
    }
    
    // Add the company to the filtered array if it has only one 'o'
    if (count <= 1) {
      filteredCompanies.push(company);
    }
  }
  
console.log(filteredCompanies);

// 15. Sort the array using sort() method
const sortedArray = companies.sort();
console.log('Exercise 15');
console.log(sortedArray);

// 16. Reverse the array using reverse() method
const reversedArray = companies.reverse();
console.log('Exercise 16');
console.log(reversedArray);

// 17. Slice out the first 3 companies from the array
console.log('Exercise 17');
console.log(companies.slice(0, 4));

// 18. Slice out the last 3 companies from the array
console.log('Exercise 18');
console.log(companies.slice(-3));

// 19. Slice out the middle IT company or companies from the array
console.log('Exercise 19');
console.log(companies.slice(2, 4));

// 20. Remove the first IT company from the array
console.log('Exercise 20');
console.log(companies.slice(1));

// 21. Remove the middle IT company or companies from the array
console.log('Exercise 21');
console.log(companies.slice(0, 2).concat(companies.slice(4)));

// 22. Remove the last IT company from the array
console.log('Exercise 22');
console.log(companies.slice(0, -1));

// 23. Remove all IT companies
console.log('Exercise 23');
companies = [];
console.log(companies);