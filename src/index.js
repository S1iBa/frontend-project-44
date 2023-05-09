import readlineSync from "readline-sync";

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const promptUserName = () => {
  const name = readlineSync.question("Your name: ");
  return name;
};

export const startGame = (
  getQuestionParams,
  readUserInput,
  verify,
  rightAnswer
) => {
  console.log("Welcome to the Brain Games!");
  const name = promptUserName();
  console.log(`Hello, ${name}!`);

  let quest = 0;
  while (quest < 3) {
    const [questionText, rightAnswer] = getQuestionParams(getRandomInt);
    console.log(questionText);
    const userAnswer = readUserInput();
    let endOfGame = `Let's try again, ${name}!`;
    const [isCorrect, message] = verify(userAnswer, rightAnswer);
    if (message != "") {
      console.log(message);
    }
    if (!isCorrect) {
      console.log(endOfGame);
      break;
    }
    quest++;
  }
  if (quest == 3) {
    console.log(`Congratulations, ${name}`);
  }
};
