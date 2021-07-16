'use strict';
// prints the value within the parens to the console (browser in this case)
let userName = prompt('What is your name?');
const randNum = Math.floor(Math.random() * 100);
const questions = ['Am I 6ft tall?', 'Do I live in Seattle?', 'Do I like to sing?', 'Do I like pizza?', 'Can I swim?', 'Guess a number between 1 and 100. You have 4 attempts, good luck!', 'What is one of my favorite hobbies?'];
const response = ['n', 'n', 'y', 'y', 'n'. randNum, 'guitar', 'singing', 'movies', 'gardening', 'painting', 'shopping', 'traveling', 'cooking', 'hiking', 'driving'];
const genericPositive = 'Congratulations, you got the answer right!';
const genericNegative = 'Sorry, you got the answer wrong.';
const genericInvalid = 'Your answer did not fit the criteria';
const genericOver = 'You have exhausted all attempts';
let score = 0;
game();
function game() {
    alert("This is a guessing game. I will ask you exactly 5 questions and let's see if you can get it. Here is my 1st question.");
    for (let i = 0; i < questions.length; i++) {
        switch (i) {
            case 6:
                thirdSet(i);
                break;
            case 5:
                secondSet(i);
                break;
            default:
                firstSet(i);
        }
    }
    alert('Thank you, ' + userName + ', for playing! Your score was ' + score + ' out of 7.');
}
function firstSet(i) {
    let answer = prompt(questions[i]).charAt(0).toLowerCase();
    //console.log(answer);
    if (!isNaN(answer)) {
        alert(genericInvalid);
    } else {
        if (answer === response[i]) {
            alert(genericPositive);
            score++;
        } else {
            alert(genericNegative);
        }
    }
}
function secondSet(i) {
    let attempts = 0;
    let correct = false;
    while (!correct && attempts < 4) {
        let answer = prompt(questions[i]);
        //console.log(answer);
        if (isNaN(answer)) {
            alert(genericInvalid);
        } else {
            if (answer > response[i]) {
                alert('Too high, try again.');
            } else if (answer < response[i]) {
                alert('Too low, try again.');
            } else {
                alert(genericPositive);
                correct = true;
                score++;
            }
        }
        attempts++;
    }
    if (!correct) {
        alert(genericOver);
    }
}
function thirdSet(i) {
    let attempts = 0;
    let correct = false;
    while (!correct && attempts < 6) {
        let answer = prompt(questions[i]).toLowerCase();
        //console.log(answer);
        if (!isNaN(answer)) {
            alert(genericInvalid);
            break;
        } else {
            for (let favs = 6; favs < response.length; favs++) {
                if (answer === response[favs]) {
                    alert(genericPositive);
                    correct = true;
                    score++;
                }
            }
            if (!correct) {
                alert(genericNegative);
            }
        }
        attempts++;
    }
    if (!correct) {
        alert(genericOver);
    }
}
