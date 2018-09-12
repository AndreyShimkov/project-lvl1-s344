
import readlineSync from 'readline-sync';

const rounds = 3;
const maxNumber = 30;
const maxOperations = 3;

export const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  return userName;
};

const checkAnswer = (question, correctAnswer, name) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
    console.log(`Let's try again, ${name}`);
  }
};

const generateRandomNumber = num => Math.floor(Math.random() * num + 1);

export const brainGamesCalc = (name) => {
  let number1;
  let number2;
  let operation;
  let correctAnswer;
  let question;
  for (let i = 1; i <= rounds; i += 1) {
    number1 = generateRandomNumber(maxNumber);
    number2 = generateRandomNumber(maxNumber);
    operation = generateRandomNumber(maxOperations);
    switch (operation) {
      case 1:
        question = `${number1} + ${number2}`;
        correctAnswer = number1 + number2;
        break;
      case 2:
        question = `${number1} - ${number2}`;
        correctAnswer = number1 - number2;
        break;
      default:
        question = `${number1} * ${number2}`;
        correctAnswer = number1 * number2;
        break;
    }
    checkAnswer(question, `${correctAnswer}`, name);
  }
};

export const brainGamesEven = (name) => {
  let question;
  let correctAnswer;
  for (let i = 1; i <= rounds; i += 1) {
    question = generateRandomNumber(maxNumber);
    correctAnswer = question % 2 !== 0 ? 'no' : 'yes';
    checkAnswer(question, correctAnswer, name);
  }
};

export const brainGamesGcd = (name) => {
  let number1;
  let number2;
  const findGcd = (num1, num2) => {
    if (num1 === num2 || num2 === 0) {
      return num1;
    }
    const maxNum = Math.max(num1, num2);
    const minNum = Math.min(num1, num2);
    const remainder = maxNum % minNum;
    return findGcd(minNum, remainder);
  };
  for (let i = 1; i <= rounds; i += 1) {
    number1 = generateRandomNumber(maxNumber);
    number2 = generateRandomNumber(maxNumber);
    checkAnswer(`${number1}  ${number2}`, `${findGcd(number1, number2)}`, name);
  }
};
