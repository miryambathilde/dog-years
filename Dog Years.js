//const my age, my current age
const myAge = 40;
//my early Years
let earlyYears = 2;
earlyYears *= 10.5;
let laterYears = myAge - 2;
laterYears *= 4;

console.log(earlyYears)
console.log(laterYears)
//add earlyYears and laterYears together in myAgeInDogYears
let myAgeInDogYears = earlyYears + laterYears
//convert the string in lowercase
let myName = 'Miryam'.toLowerCase();
//prints the message with interpolation
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);