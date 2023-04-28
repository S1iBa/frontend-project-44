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

// readlineSync.question("Your answer: ", choosing);
// console.log('Answer "Yes" if the number is even, otherwise answer "No"');
// const choosing = ["Yes", "No"];
// readUserInput = readlineSync.question("Your answer: ", choosing);
// let firstNumber = getRandomInt(1, 50);

const getQuestionParams = (getRandomInt) => {
  // let notification = "";
  let firstNumber = getRandomInt(1, 50);
  let rightAnswer = "";
  let question = "";
  if (numberIsEven(firstNumber)) {
    rightAnswer = "Yes";
    // notification = "Correct!";
  } else if (!numberIsEven(firstNumber)) {
    rightAnswer = "No";

    // notification = "Correct!";
    // console.log(`Let's try again, ${promptUserName}!`);
  }

  console.log('Answer "Yes" if the number is even, otherwise answer "No"');
  return [`Question:${firstNumber}`, rightAnswer];
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
      return [false, wrongAnswer];
    }
  }
  // wrongAnswer = `Let's try again, ${promptUserName}!`;
};

startGame(getQuestionParams, readUserInput, verify);

// console.log(repeatQuestions(enumerat));

export default { getRandomInt };
