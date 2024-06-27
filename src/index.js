import readlineSync from 'readline-sync';
import getRandomInt from './utils';

export const promptUserName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

const lastRound = 3;

export const startGame = (gameIntro, gameGeneration, readUserInput) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameIntro);

  const name = promptUserName();
  console.log(`Hello, ${name}!`);

  for(let quest = 0; quest < lastRound; quest++) {
    const [questionText, rightAnswer] = gameGeneration(getRandomInt);
    console.log(questionText);
    const userAnswer = readlineSync.question("Your answer: ").toLowerCase();;
    const isCorrect = userAnswer === rightAnswer;
    const endOfGame = `Let's try again, ${name}!`;

 if (isCorrect) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(endOfGame);
      return;
    };
  };
  console.log(`Congratulations, ${userName}!`);
};