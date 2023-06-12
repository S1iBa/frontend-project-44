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

const readUserInput = () => {
  return readlineSync.question("Your answer: ");
};

const getQuestionParams = () => {
  let newArray = arithmeticProgress(1, 10);
  let rand = getRandomInt(0, newArray.length);
  const newElem = "..";
  let rightAnswer = newArray[rand];
  newArray[rand] = newElem;
  console.log("What number is missing in the progression?");
  return [`Question: ${newArray.join(" ")}`, rightAnswer];
};

const answerIsNumber = (value) => {
  if (value === "0") {
    return true;
  } else if (value === 0) {
    return true;
  } else {
    return !!Number(value);
  }
};

const verify = (readUserInput, rightAnswer) => {
  const wrongAnswer = `'${readUserInput}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`;
  if (answerIsNumber(readUserInput)) {
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
