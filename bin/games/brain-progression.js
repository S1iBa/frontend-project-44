#!/usr/bin/env node
import readlineSync from "readline-sync";
import { startGame } from "../../src/index.js";
import { getRandomInt } from "../../src/index.js";
import { promptUserName } from "../../src/index.js";

const arithmeticProgress = (n, max) => {
  const random = getRandomInt(2, 6);
  const newArray = Array.from(
    { length: Math.ceil(max / n) },
    (_, i) => (i + 1) * random
  );

  return newArray;
};
// Math.floor(

// newArray[Math.floor(Math.random() * newArray.length)];
// const arr = [1, 2, 3, 4, 5];
// const getRandomArrayElement = (arr) => {
//   let rand = Math.floor(Math.random()) * arr.length;
//   const newElem = "..";
//   arr.splice(rand, 1, "..");
//   return [arr, rand];
// };

const readUserInput = () => {
  return readlineSync.question("Your answer: ");
};

const getQuestionParams = () => {
  let newArray = arithmeticProgress(1, 10);
  let rand = getRandomInt(0, newArray.length);
  const newElem = "..";
  // let rightAnswer = newArray[rand].slice(rand, 1, newElem);
  let rightAnswer = newArray[rand];
  newArray[rand] = newElem;
  console.log("What number is missing in the progression?");
  return [`Question: ${newArray}`, rightAnswer];
};

const verify = (readUserInput, rightAnswer) => {
  const wrongAnswer = `'${readUserInput}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`;
  let typeUserInput = typeof readUserInput;
  if (typeUserInput == "number") {
    if (readUserInput == rightAnswer) {
      return [true, "Correct!"];
    }
    if (typeof readUserInput != rightAnswer) {
      return [false, wrongAnswer];
    }
  } else {
    return [false, ""];
  }
};

startGame(getQuestionParams, readUserInput, verify);

// console.log(newArray);

// const getQuestionParams = (getRandomInt, newArray) => {
//     let changeArr = newArray.splice()
//   let firstNumber = getRandomInt(1, 50);
//   let secondNumber = getRandomInt(1, 50);
//   let rightAnswer = nod(firstNumber, secondNumber);
//   console.log("Find the greatest common divisor of given numbers.");
//   return [`Question: ${arithmeticProgress}`];
// };
