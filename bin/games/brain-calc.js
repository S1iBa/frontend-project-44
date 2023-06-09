import readlineSync from "readline-sync";
import { startGame } from "../../src/index.js";

const readUserInput = () => {
  return readlineSync.question("Your answer: ");
};

const getQuestionParams = (getRandomInt) => {
  let mathSigns = ["+", "-", "*"];
  const chooseSign = Math.floor(Math.random() * mathSigns.length);
  let rightAnswer = 0;
  const firstNumber = getRandomInt(0, 50);
  const secondNumber = getRandomInt(0, 50);

  if (mathSigns[chooseSign] == "+") {
    rightAnswer = firstNumber + secondNumber;
  } else if (mathSigns[chooseSign] == "-") {
    rightAnswer = firstNumber - secondNumber;
  } else if (mathSigns[chooseSign] == "*") {
    rightAnswer = firstNumber * secondNumber;
  }

  console.log("What is the result of the expression? ");
  return [
    `Question: ${firstNumber}${mathSigns[chooseSign]}${secondNumber}`,
    rightAnswer,
  ];
};

const answerIsNumber = (value) => {
  if (value === "0") {
    return true;
  } else if (value === 0) {
    return true;
  } else {
    return !!Number(value);
  }
};

const verify = (readUserInput, rightAnswer) => {
  const wrongAnswer = `'${readUserInput}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`;
  if (answerIsNumber(readUserInput)) {
    if (readUserInput == rightAnswer) {
      return [true, "Correct!"];
    } else {
      return [false, wrongAnswer];
    }
  } else {
    return [false, ""];
  }
};

startGame(getQuestionParams, readUserInput, verify);
