#!/usr/bin/env node
import { startGame } from "../index.js";
import getRandomInt from "../utils.js";

const gameIntro = 'Answer "yes" if the number is even, otherwise answer "no"';

const numberIsEven = (firstNumber) => {
  const x = firstNumber;
  if (x % 2 === 0) {
    return true;
  }
  return false;
};

const gameGeneration = () => {
  const firstNumber = getRandomInt(1, 50);
  let rightAnswer = "";
  if (numberIsEven(firstNumber)) {
    rightAnswer = "yes";
  } else if (!numberIsEven(firstNumber)) {
    rightAnswer = "no";
  }
  
  return [`Question: ${firstNumber}`, rightAnswer];
};

export default () => startGame(gameIntro, gameGeneration);