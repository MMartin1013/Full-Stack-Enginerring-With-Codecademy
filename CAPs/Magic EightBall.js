//Stores users name
let userName = 'Manolo';

//Says hello user or hello depending on username input
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

//Question to be answered by eightball
let userQuestion = 'Is it going to rain today';
console.log(userQuestion);

//Variable that determines eightballs answer
let randomNumber = Math.floor(Math.random() * 8);

//Storage variable for answer
let eightBall = '';

//Based on the number the value of the storage variable changes
switch(randomNumber){
  case 0:
    eightBall = 'It is certain';
  case 1:
    eightBall = 'It is decidedly so';
  case 2:
    eightBall = 'Reply hazy try again';
  case 3:
    eightBall = 'Cannot predict now';
  case 4:
    eightBall = 'Do not count on it';
  case 5:
    eightBall = 'My sources say no';
  case 6:
    eightBall = 'Outlook not so good';
  case 7:
    eightBall = 'Signs point to yes';

}

//Prints storage variable
console.log(eightBall);