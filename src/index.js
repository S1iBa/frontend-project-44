import readlineSync from 'readline-sync';

export const getRandomInt = (min, max) => {
  const min1 = Math.ceil(min);
  const max1 = Math.floor(max);
  return Math.floor(Math.random() * (max1 - min1)) + min1;
};

export const promptUserName = () => {
  const name = readlineSync.question('Your name: ');
  return name;
};

export const startGame = (getQuestionParams, readUserInput, verify) => {
  console.log('Welcome to the Brain Games!');
  const name = promptUserName();
  console.log(`Hello, ${name}!`);

  let quest = 0;
  while (quest < 3) {
    const [questionText, rightAnswer] = getQuestionParams(getRandomInt);
    console.log(questionText);
    const userAnswer = readUserInput();
    const endOfGame = `Let's try again, ${name}!`;
    const [isCorrect, message] = verify(userAnswer, rightAnswer);
    if (message !== '') {
      console.log(message);
    }
    if (!isCorrect) {
      console.log(endOfGame);
      break;
    }
    quest += 1;
  }
  if (quest === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
