#!/usr/bin/env node
import startGame from '../index.js';
import getRandomInt from '../utils.js';

const gameIntro = 'What number is missing in the progression?';

const arithmeticProgress = (n, max) => {
  const step = getRandomInt(2, 6);
  const listOfNumbers = Array.from(
    { length: Math.ceil(max / n) },
    (_, i) => (i + 1) * step,
  );

  return listOfNumbers;
};

const gameGeneration = () => {
  const newListOfNumbers = arithmeticProgress(1, 10);
  const unknowElemPosition = getRandomInt(0, newListOfNumbers.length);
  const unknownElem = '..';
  const rightAnswer = newListOfNumbers[unknowElemPosition];
  newListOfNumbers[unknowElemPosition] = unknownElem;
  return [`Question: ${newListOfNumbers.join(' ')}`, String(rightAnswer)];
};

export default () => startGame(gameIntro, gameGeneration);
