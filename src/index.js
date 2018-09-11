
import readlineSync from 'readline-sync';

export const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  return userName;
};

const checkAnswer = (answer, correctAnswer, name) => {
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
    console.log(`Let's try again, ${name}`);
  }
};

const askQuestion = (num, name) => {
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = num % 2 !== 0 || num === 0 ? 'no' : 'yes';
  checkAnswer(answer, correctAnswer, name);
};

const generateRandomNumber = () => Math.floor(Math.random() * 30);

export const brainGamesEven = (name, rounds) => {
  let number;
  for (let i = 1; i <= rounds; i += 1) {
    number = generateRandomNumber();
    askQuestion(number, name);
  }
};
