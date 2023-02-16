import readlineSync from "readline-sync";

const greeting = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("Your name: ");
  const result = "Hello, " + name + "!";
  return result;
};

export { greeting };
