#!/usr/bin/env node
import startGame from '../index.js';
import getRandomInt from '../utils.js';

const gameIntro = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const gameGeneration = () => {
  const firstNumber = getRandomInt(1, 50);
  const rightAnswer = isPrime(firstNumber) ? 'yes' : 'no';
  return [`Question: ${firstNumber}`, String(rightAnswer)];
};

export default () => startGame(gameIntro, gameGeneration);
