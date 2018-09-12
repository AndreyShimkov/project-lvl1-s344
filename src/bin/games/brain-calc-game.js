
import { generateRandomNumber, askQuestion, checkAnswer } from '../..';

const maxOperations = 3;

export const gameRules = 'What is the result of the expression?';

export const brainGamesCalc = (name) => {
  const number1 = generateRandomNumber();
  const number2 = generateRandomNumber();
  const operation = generateRandomNumber(maxOperations);

  let question;
  let correctAnswer;

  if (operation === 1) {
    question = `${number1} + ${number2}`;
    correctAnswer = `${number1 + number2}`;
  } else if (operation === 2) {
    question = `${number1} - ${number2}`;
    correctAnswer = `${number1 - number2}`;
  } else {
    question = `${number1} * ${number2}`;
    correctAnswer = `${number1 * number2}`;
  }
  const userAnswer = askQuestion(question);
  checkAnswer(userAnswer, correctAnswer, name);
};
