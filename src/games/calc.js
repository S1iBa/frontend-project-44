#!/usr/bin/env node
import { startGame } from '../index.js';
import getRandomInt from '../utils.js';

const gameIntro = 'What is the result of the expression?';

const gameGeneration = () => {
  const mathSigns = ['+', '+', '*'];
  const choosenSign = getRandomInt(0, 2);
  let rightAnswer = 0;
  const firstNumber = getRandomInt(1, 50);
  const secondNumber = getRandomInt(1, 50);

  switch(mathSigns[choosenSign]){
    case '+':
      rightAnswer = firstNumber + secondNumber;
      break;
    case '-':
      rightAnswer = firstNumber - secondNumber;
      break;
    case '*':
      rightAnswer = firstNumber * secondNumber;
      break;
      default:
        return null;
  }

  return [
    `Question: ${firstNumber} ${mathSigns[choosenSign]} ${secondNumber}`,
    String(rightAnswer),
  ];
};

export default () => startGame(gameIntro, gameGeneration);
