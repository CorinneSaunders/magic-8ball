// User name string variable
let userName = 'Corinne';

// Conditional console log responses
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// users string question variable
let userQuestion = 'Will I win the lottery?';

// Console log user name and there question
console.log(`${userName} asked: ${userQuestion}`);

// Setting Random number any number from 0 to 8
let randomNumber = Math.floor(Math.random() * 8);

//  Declaring eight Ball variable to an empty string
let eightBall = '';

// Executes statement saved to eightBall variable based on randomNumber results using switch statements
switch (randomNumber) {
    case 0:
    eightBall = 'It is certain';
    break;
    case 1:
    eightBall = 'It is decidedly so';
    break;
    case 2:
    eightBall = 'Reply hazy try again';
    break;
    case 3:
    eightBall = 'Cannot predict now';
    break;
    case 4: 
    eightBall = 'Do not count on it';
    break; 
    case 5: 
    eigthBall = 'My sources say no';
    break;  
    case 6: 
    eigthBall = 'Outlook not so good';
    break;  
    default:     
    eigthBall = 'signs point to yes';
    break;
}

console.log(eightBall);
