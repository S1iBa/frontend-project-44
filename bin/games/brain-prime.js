#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';
import { startGame } from '../../src/index.js';

const ariphMean = (numbers) => {
  if (numbers.length === 0) {
    return null;
  }
  let mean = 0;
  mean = _.sum(numbers) / numbers.length;
  return mean;
};

ariphMean([10, 15]);
const readUserInput = () => {
  const choosing = ['yes', 'no'];
  return readlineSync.question('Your answer: ', choosing);
};

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};
// let num = 6;
// console.log(isPrime(num));

const getQuestionParams = (getRandomInt) => {
  const firstNumber = getRandomInt(1, 50);
  let rightAnswer = '';
  if (isPrime(firstNumber)) {
    rightAnswer = 'yes';
  } else if (!isPrime(firstNumber)) {
    rightAnswer = 'no';
  }

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  return [`Question: ${firstNumber}`, rightAnswer];
};

const verify = (userInput, rightAnswer) => {
  if (userInput === rightAnswer) {
    return [true, 'Correct!'];
  }
  if (userInput === 'yes' && rightAnswer === 'no') {
    return [false, '"yes" is wrong answer ;(. Correct answer was "no".'];
  }
  if (userInput === 'no' && rightAnswer === 'yes') {
    return [false, '"no" is wrong answer ;(. Correct answer was "yes".!'];
  }
  return [false, ''];
};

startGame(getQuestionParams, readUserInput, verify);
