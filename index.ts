#! /usr/bin/env node

import inquirer from "inquirer";

// 1) Computer will generate a random number - Done
// 2) User input for guessing number - Done
// 3) Compare user input with computer generated number and result - DOne
const randomNumber = Math.floor(Math.random() * 6 + 1 );
console.log("Welcome To Number Guessing Game");
const guessNumber = await inquirer.prompt([
    {
        name : "UserGuessedNumber",
        type : "number",
        message : "Please Guess a Number Between : ",
    }
]);
if (guessNumber.UserGuessedNumber === randomNumber){
    console.log("Congratulations! You Guessed Right Number");
} else {
    console.log("You Insert Wrong Number");
};