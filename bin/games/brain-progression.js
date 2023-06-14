#!/usr/bin/env node
import readlineSync from "readline-sync";
import { startGame, getRandomInt } from "../../src/index.js";

const arithmeticProgress = (n, max) => {
  const random = getRandomInt(2, 6);
  const newArray = Array.from(
    { length: Math.ceil(max / n) },
    (_, i) => (i + 1) * random,
  );

  return newArray;
};

const readUserInput = () => readlineSync.question("Your answer: ");

const getQuestionParams = () => {
  const newArray = arithmeticProgress(1, 10);
  const rand = getRandomInt(0, newArray.length);
  const newElem = "..";
  const rightAnswer = newArray[rand];
  newArray[rand] = newElem;
  console.log("What number is missing in the progression?");
  return [`Question: ${newArray.join(" ")}`, rightAnswer];
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
    if (+userInput !== +rightAnswer) {
      return [false, wrongAnswer];
    }
  }
  return [false, ""];
};

startGame(getQuestionParams, readUserInput, verify);
