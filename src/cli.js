import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  const result = `Hello, ${name}!`;
  return result;
};

export default greeting;
