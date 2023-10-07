// 1. Count the number of word love in this sentence:
// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
const sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
const pattern = /love/gi;
const loveArray = sentence.match(pattern);
console.log('Exercise 1');
console.log(loveArray.length, loveArray);

// 2. Use match() to count the number of all because in the following sentence:
// 'You cannot end a sentence with because because because is a conjunction'
const sentence2 = 'You cannot end a sentence with because because because is a conjunction';
const pattern2 = /because/gi;
const becauseArray = sentence.match(pattern);
console.log('Exercise 2');
console.log(becauseArray.length, becauseArray);

//3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
const pattern3 = /[^\w\s]/g;
const cleaned = sentence3.replace(pattern3, '');
console.log('Exercise 3');
console.log('Cleaned sentence: ');
console.log(cleaned);

console.log('Now finding most frequent word');
const words = cleaned.toLowerCase().split(' ');

let mostFrequentIndex = 0;
let mostFrequentCount = 0;
for (let i = 0; i < words.length; i++) {
    let count = 1;
    if (words[i] !== null) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[j] === words[i]) {
                count++;
                words[j] = null;
            }
        }
    }
    if (count > mostFrequentCount) {
        mostFrequentCount = count;
        mostFrequentIndex = i;
    }
}

console.log('Most frequent word + amount of times:');
console.log(words[mostFrequentIndex], mostFrequentCount);

// 4. Calculate the total annual income of a person by extracting the numbers from the following text.
// 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

const numbers = text.match(/\d+/g); 
const monthlySalary = parseInt(numbers[0]); 
const annualBonus = parseInt(numbers[1]); 
const monthlyCoursesIncome = parseInt(numbers[2]); 

const totalAnnualIncome = (monthlySalary * 12) + annualBonus + (monthlyCoursesIncome * 12);
console.log('Exercise 4');
console.log(`Total annual income: ${totalAnnualIncome} euro`);