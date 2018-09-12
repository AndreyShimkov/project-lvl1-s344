
import readlineSync from 'readline-sync';

const rounds = 3;
const maxNumber = 30;

export const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  return userName;
};

export const askQuestion = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

export const checkAnswer = (answer, correctAnswer, name) => {
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
    console.log(`Let's try again, ${name}`);
  }
};

export const generateRandomNumber = (num = maxNumber) => Math.floor(Math.random() * num + 1);

export const brainGamesMain = (gameRules, mainGameBlock) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameRules);
  const name = askName();
  for (let i = 1; i <= rounds; i += 1) {
    mainGameBlock(name);
  }
  console.log(`Congratulations, ${name}`);
};
