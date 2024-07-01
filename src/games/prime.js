#!/usr/bin/env node
import { startGame } from "../index.js";
import getRandomInt from "../utils.js";

const gameIntro = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    return num % i === 0;
  }
  return num;
};

const gameGeneration = () => {
  const firstNumber = getRandomInt(1, 50);
  let rightAnswer = isPrime(firstNumber) ? "yes" : "no";
  return [`Question: ${firstNumber}`, String(rightAnswer)];
};

export default () => startGame(gameIntro, gameGeneration);