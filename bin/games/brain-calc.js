#!/usr/bin/env node
import readlineSync from "readline-sync";
import { startGame } from "../../src/index.js";

const readUserInput = () => readlineSync.question("Your answer: ");

const getQuestionParams = (getRandomInt) => {
  const mathSigns = ["+", "-", "*"];
  const chooseSign = Math.floor(Math.random() * mathSigns.length);
  let rightAnswer = 0;
  const firstNumber = getRandomInt(1, 50);
  const secondNumber = getRandomInt(1, 50);

  if (mathSigns[chooseSign] === "+") {
    rightAnswer = firstNumber + secondNumber;
  } else if (mathSigns[chooseSign] === "-") {
    rightAnswer = firstNumber - secondNumber;
  } else if (mathSigns[chooseSign] === "*") {
    rightAnswer = firstNumber * secondNumber;
  }

  console.log("What is the result of the expression? ");
  return [
    `Question: ${firstNumber} ${mathSigns[chooseSign]} ${secondNumber}`,
    rightAnswer,
  ];
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
  if (answerIsNumber(userInput)) {
    if (+userInput === +rightAnswer) {
      return [true, "Correct!"];
    }
    return [false, wrongAnswer];
  }
  return [false, ""];
};

startGame(getQuestionParams, readUserInput, verify);
