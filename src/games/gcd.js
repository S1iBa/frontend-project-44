#!/usr/bin/env node
import startGame from '../index.js';
import getRandomInt from '../utils.js';

const gameIntro = 'Find the greatest common divisor of given numbers.';

const nod = (firstNumber, secondNumber) => !secondNumber ? firstNumber
: nod(secondNumber, firstNumber % secondNumber);

const gameGeneration = () => {
  const firstNumber = getRandomInt(1, 50);
  const secondNumber = getRandomInt(1, 50);
  const rightAnswer = nod(firstNumber, secondNumber);
  return [`Question: ${firstNumber} ${secondNumber}`, String(rightAnswer)];
};

export default () => startGame(gameIntro, gameGeneration);
