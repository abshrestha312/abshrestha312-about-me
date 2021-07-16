'use strict';

console.log('hello world');
// prints the value within the parens to the console (browser in this case)
let userName=prompt('What is your Name?');
console.log('the users name is: ', userName);



let userDev= prompt('Are you a Developer?');
console.log('the user is: ', userDev);
if (userDev === 'yes')
{
    alert("Welcome Developer!");
}
else
{
    alert("Welcome!!! "+ userName);
}

alert("This is a guessing game. I will ask you exactly 5 questions and let's see if you can get it. Here is my 1st question. ");

let questionOne= prompt('Am I a 6ft tall ? ');
console.log(questionOne);
if (questionOne === 'yes')
{
    alert("Sorry, you got it wrong. I am 5.6!. Here is the 2nd question. ");
}
else if (questionOne === 'no')
{
    alert("Congratulations!!! You got it. Here is the 2nd question.");

}

let questionTwo= prompt('Do I live in Seattle ? ');
console.log(questionTwo);
if (questionTwo === 'yes')
{
    alert("Sorry, you got it wrong. I live in Oklahoma City, Oklahoma. Here is the 3rd question. ");
}
else if (questionTwo === 'no')
{
    alert("Congratulations!!! You got it. I live in Oklahoma City, Oklahoma. Here is the 3rd question.");

}

let questionThree= prompt('Do I like to sing ? ');
console.log(questionThree);
if (questionThree === 'no')
{
    alert("Sorry, you got it wrong. I like Singing. Here is the 4th question. ");
}
else if (questionThree === 'yes')
{
    alert("Congratulations!!! You got it. I like Singing. Here is the 4th question.");

}

