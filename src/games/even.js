#!/usr/bin/env node
import startGame from '../index.js';
import getRandomInt from '../utils.js';

const gameIntro = 'Answer "yes" if the number is even, otherwise answer "no"';

const numberIsEven = (firstNumber) => firstNumber % 2 === 0;

const gameGeneration = () => {
  const firstNumber = getRandomInt(1, 50);
  const rightAnswer = numberIsEven(firstNumber) ? 'yes' : 'no';
  return [`Question: ${firstNumber}`, rightAnswer];
};

export default () => startGame(gameIntro, gameGeneration);
