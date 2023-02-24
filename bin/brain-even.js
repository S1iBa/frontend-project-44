#!/usr/bin/env node
import readlineSync from "readline-sync";

console.log("Welcome to the Game!");
const name = readlineSync.question("Your name: ");
console.log(`Hello, ${name}!`);

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

console.log('Answer "Yes" if the number is even, otherwise answer "No"');
let quest = 0;

while (quest < 3) {
  let number = getRandomInt(1, 100);
  const question = `Question:${number}`;
  console.log(question);

  const choosing = ["Yes", "No"];
  const index = readlineSync.question("Your answer: ", choosing);

  const numberIsEven = (number) => {
    const x = number;
    if (x % 2 == 0) {
      return true;
    }
    return false;

    //   console.log("Let's try again, Bill!");
  };

  if (index == "Yes" && numberIsEven(number) == true) {
    console.log("Correct!");
    number = getRandomInt(1, 100);
    quest++;
  } else if (index == "No" && numberIsEven(number) == false) {
    console.log("Correct!");
    number = getRandomInt(1, 100);
    quest++;
  } else {
    if (index == "Yes" && numberIsEven(number) == false) {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    } else if (index == "No" && numberIsEven(number) == true) {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
    }
    console.log(`Let's try again, ${name}!`);
    break;
  }
}
if (quest == 3) {
  console.log(`Congratulation, ${name}!`);
}
// console.log(numberIsEven(number));

// const answer = require("readline-sync"),
//   numbers = ["Yes", "No"],
//   index = answer.keyInSelect(numbers, "Your answer: ");
// console.log("Ok, " + numbers[index] + " goes to your room.");

// const answer = readlineSync.question("Your answer: ");
// console.log(answer);

// const letCheck = () => {
//     if (newNumber / 2) {
//       question = "yes";
//     } else
//       () => {
//         question = "no";
//       };
//     return console.log("Correct!");
//   };
