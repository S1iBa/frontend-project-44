#!/usr/bin/env node
import { startGame } from "../index.js";

const gameIntro = 'Find the greatest common divisor of given numbers.';

const nod = (firstNumber, secondNumber) => {
  if (secondNumber > firstNumber) return nod(secondNumber, firstNumber);
  if (!secondNumber) return firstNumber;
  return nod(secondNumber, firstNumber % secondNumber);
};

const gameGeneration = (getRandomInt) => {
  const firstNumber = getRandomInt(1, 50);
  const secondNumber = getRandomInt(1, 50);
  const rightAnswer = nod(firstNumber, secondNumber);
  return [`Question: ${firstNumber} ${secondNumber}`, String(rightAnswer)];
};

startGame(gameIntro, gameGeneration);
