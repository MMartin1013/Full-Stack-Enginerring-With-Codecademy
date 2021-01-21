//Creates constant variable kelvin at 293 degrees
const kelvin = 0;

//Converts Kelvin to Celsius
let celsius = kelvin - 273;

//Converts Celsius to Farenheit
let farenheit = celsius * (9/5) + 32;

//Rounds and prints farenheit
farenheit = Math.floor(farenheit)
console.log(`The temperature is ${farenheit} degrees Farenheit`);

//Converts Celsius to Newtons
let newton = celsius * (33/100);

//Rounds and Prints Newtons
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton`);