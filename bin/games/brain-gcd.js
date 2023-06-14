#!/usr/bin/env node
import readlineSync from "readline-sync";
import { startGame } from "../../src/index.js";

const nod = (firstNumber, secondNumber) => {
  if (secondNumber > firstNumber) return nod(secondNumber, firstNumber);
  if (!secondNumber) return firstNumber;
  return nod(secondNumber, firstNumber % secondNumber);
};

const readUserInput = () => readlineSync.question("Your answer: ");

const getQuestionParams = (getRandomInt) => {
  const firstNumber = getRandomInt(1, 50);
  const secondNumber = getRandomInt(1, 50);
  const rightAnswer = nod(firstNumber, secondNumber);
  console.log("Find the greatest common divisor of given numbers.");
  return [`Question: ${firstNumber} ${secondNumber}`, rightAnswer];
};

const answerIsNumber = (value) => {
  if (value === "0") {
    return true;
  }
  if (value === 0) {
    return true;
  }
  return !!Number(value);
};

const verify = (userInput, rightAnswer) => {
  const wrongAnswer = `'${userInput}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`;
  if (answerIsNumber(readUserInput)) {
    if (userInput === rightAnswer) {
      return [true, "Correct!"];
    }
    return [false, wrongAnswer];
  }
  return [false, ""];
};

startGame(getQuestionParams, readUserInput, verify);
