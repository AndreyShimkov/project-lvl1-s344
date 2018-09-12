
import { generateRandomNumber, askQuestion, checkAnswer } from '../..';

export const gameRules = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  if (num1 === num2 || num2 === 0) {
    return num1;
  }
  const maxNum = Math.max(num1, num2);
  const minNum = Math.min(num1, num2);
  const remainder = maxNum % minNum;
  return findGcd(minNum, remainder);
};

export const brainGamesGcd = (name) => {
  const number1 = generateRandomNumber();
  const number2 = generateRandomNumber();
  const question = `${number1}  ${number2}`;
  const userAnswer = askQuestion(question);
  const correctAnswer = `${findGcd(number1, number2)}`;
  checkAnswer(userAnswer, correctAnswer, name);
};
