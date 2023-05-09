#!/usr/bin/env node
import readlineSync from "readline-sync";
import { startGame } from "../../src/index.js";
import { getRandomInt } from "../../src/index.js";
import { promptUserName } from "../../src/index.js";

const numberIsEven = (firstNumber) => {
  const x = firstNumber;
  if (x % 2 == 0) {
    return true;
  }
  return false;
};

const choosing = ["Yes", "No"];
const readUserInput = (choosing) => {
  return readlineSync.question("Your answer: ", choosing);
};

const getQuestionParams = (getRandomInt) => {
  let firstNumber = getRandomInt(1, 50);
  let rightAnswer = "";
  if (numberIsEven(firstNumber)) {
    rightAnswer = "Yes";
  } else if (!numberIsEven(firstNumber)) {
    rightAnswer = "No";
  }

  console.log('Answer "Yes" if the number is even, otherwise answer "No"');
  return [`Question: ${firstNumber}`, rightAnswer];
};

const verify = (readUserInput, rightAnswer) => {
  if (readUserInput == rightAnswer) {
    return [true, "Correct!"];
  } else {
    if (readUserInput == "Yes" && rightAnswer == "No") {
      return [false, "'yes' is wrong answer ;(. Correct answer was 'no'."];
    } else if (readUserInput == "No" && rightAnswer == "Yes") {
      return [false, "'no' is wrong answer ;(. Correct answer was 'yes'.!"];
    } else {
      return [false, ""];
    }
  }
};

startGame(getQuestionParams, readUserInput, verify);
