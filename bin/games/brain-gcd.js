#!/usr/bin/env node
import readlineSync from "readline-sync";
import { startGame } from "../../src/index.js";
import { getRandomInt } from "../../src/index.js";
import { promptUserName } from "../../src/index.js";

const nod = (firstNumber, secondNumber) => {
  if (secondNumber > firstNumber) return nod(secondNumber, firstNumber);
  if (!secondNumber) return firstNumber;
  return nod(secondNumber, firstNumber % secondNumber);
};

const readUserInput = () => {
  return readlineSync.question("Your answer: ");
};

const getQuestionParams = (getRandomInt) => {
  let firstNumber = getRandomInt(1, 50);
  let secondNumber = getRandomInt(1, 50);
  let rightAnswer = nod(firstNumber, secondNumber);
  console.log("Find the greatest common divisor of given numbers.");
  return [`Question: ${firstNumber} ${secondNumber}`, rightAnswer];
};

const verify = (readUserInput, rightAnswer) => {
  const wrongAnswer = `'${readUserInput}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`;
  let typeUserInput = typeof readUserInput;
  if (typeUserInput == "number") {
    if (readUserInput == rightAnswer) {
      return [true, "Correct!"];
    } else {
      return [false, wrongAnswer];
    }
  } else {
    return [false, ""];
  }
};

startGame(getQuestionParams, readUserInput, verify);
