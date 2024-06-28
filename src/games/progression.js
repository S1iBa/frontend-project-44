#!/usr/bin/env node
import { startGame, getRandomInt } from "../index.js";

const gameIntro = 'What number is missing in the progression?';

const arithmeticProgress = (n, max) => {
  const random = getRandomInt(2, 6);
  const newArray = Array.from(
    { length: Math.ceil(max / n) },
    (_, i) => (i + 1) * random,
  );

  return newArray;
};

const gameGeneration = () => {
  const newArray = arithmeticProgress(1, 10);
  const rand = getRandomInt(0, newArray.length);
  const newElem = "..";
  const rightAnswer = newArray[rand];
  newArray[rand] = newElem;
  return [`Question: ${newArray.join(" ")}`, String(rightAnswer)];
};

export default () => startGame(gameIntro, gameGeneration);
