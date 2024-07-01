import readlineSync from 'readline-sync';
import getRandomInt from './utils.js';

const lastRound = 3;

export const startGame = (gameIntro, gameGeneration) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameIntro);

  for(let quest = 0; quest < lastRound; quest++) {
    const [questionText, rightAnswer] = gameGeneration(getRandomInt);
    console.log(questionText);
    const userAnswer = readlineSync.question("Your answer: ").toLowerCase();;
    const isCorrect = userAnswer === rightAnswer;
    const endOfGame = `Let's try again, ${name}!`;

 if (!isCorrect) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
    console.log(endOfGame);
    return;
  } 
    console.log('Correct!');
  };
  console.log(`Congratulations, ${name}!`);
};