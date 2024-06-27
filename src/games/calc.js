#!/usr/bin/env node
import { startGame } from "../index.js";

const gameIntro = 'What is the result of the expression?';

const gameGeneration = (getRandomInt) => {
  const mathSigns = ["+", "-", "*"];
  const choosenSign = Math.floor(Math.random() * mathSigns.length);
  let rightAnswer = 0;
  const firstNumber = getRandomInt(1, 50);
  const secondNumber = getRandomInt(1, 50);

  if (mathSigns[choosenSign] === "+") {
    rightAnswer = firstNumber + secondNumber;
  } else if (mathSigns[choosenSign] === "-") {
    rightAnswer = firstNumber - secondNumber;
  } else if (mathSigns[choosenSign] === "*") {
    rightAnswer = firstNumber * secondNumber;
  }

  return [
    `Question: ${firstNumber} ${mathSigns[chooseSign]} ${secondNumber}`,
    String(rightAnswer),
  ];
};

startGame(gameIntro, gameGeneration);
