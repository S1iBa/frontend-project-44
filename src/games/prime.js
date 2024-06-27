#!/usr/bin/env node
import readlineSync from "readline-sync";
import _ from "lodash";
import { startGame } from "../index.js";
import getRandomInt from "../utils.js";

const gameIntro = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const ariphMean = (numbers) => {
  if (numbers.length === 0) {
    return null;
  }
  let mean = 0;
  mean = _.sum(numbers) / numbers.length;
  return mean;
};

ariphMean([10, 15]);

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const gameGeneration = () => {
  const firstNumber = getRandomInt(1, 50);
  let rightAnswer = "";
  if (isPrime(firstNumber)) {
    rightAnswer = "yes";
  } else if (!isPrime(firstNumber)) {
    rightAnswer = "no";
  }

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  return [`Question: ${firstNumber}`, String(rightAnswer)];
};

startGame(gameIntro, gameGeneration);
