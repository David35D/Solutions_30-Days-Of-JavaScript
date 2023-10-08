// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYYY-MM-DD HH:mm eg. 2012-01-02 07:05
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


console.log('Exercsie 1');
console.log(`${year}-${month}-${date} ${hour}:${minutes}`);
