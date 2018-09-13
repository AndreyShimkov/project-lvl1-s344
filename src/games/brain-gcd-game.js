
import { brainGamesMain, generateRandomNumber, cons } from '..';

const gameRules = 'Find the greatest common divisor of given numbers.';

const brainGcdPair = () => {
  const findGcd = (num1, num2) => {
    if (num1 === num2 || num2 === 0) {
      return num1;
    }
    const maxNum = Math.max(num1, num2);
    const minNum = Math.min(num1, num2);
    const remainder = maxNum % minNum;
    return findGcd(minNum, remainder);
  };

  const number1 = generateRandomNumber();
  const number2 = generateRandomNumber();
  const question = `${number1}  ${number2}`;
  const correctAnswer = `${findGcd(number1, number2)}`;
  return cons(question, correctAnswer);
};

export default () => brainGamesMain(gameRules, brainGcdPair);
