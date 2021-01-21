//Defines my age
let myAge = 18;

//Defines early years of a dogs lifespan
let earlyYears = 2;

//Converts early dog years to human years
earlyYears *= 10.5;

//Defines later years based upon my age
let laterYears = myAge - 2;

//Converts later years to human years
laterYears *= 4;

//Prints early and later years
console.log(earlyYears)
console.log(laterYears)

//Adds early and later years together
let myAgeInDogYears = laterYears + earlyYears;

//My Name converted to a lowercase string
let myName = 'Manolo'.toLowerCase();

//Prints data
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);