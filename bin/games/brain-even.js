#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { startGame } from '../../src/index.js';

const numberIsEven = (firstNumber) => {
  const x = firstNumber;
  if (x % 2 === 0) {
    return true;
  }
  return false;
};

const readUserInput = () => {
  const choosing = ['yes', 'no'];
  return readlineSync.question('Your answer: ', choosing);
};

const getQuestionParams = (getRandomInt) => {
  const firstNumber = getRandomInt(1, 50);
  let rightAnswer = '';
  if (numberIsEven(firstNumber)) {
    rightAnswer = 'yes';
  } else if (!numberIsEven(firstNumber)) {
    rightAnswer = 'no';
  }

  console.log('Answer "yes" if the number is even, otherwise answer "no"');
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
