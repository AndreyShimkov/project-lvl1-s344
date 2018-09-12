
import { generateRandomNumber, askQuestion, checkAnswer } from '../..';

export const gameRules = 'Balance the given number.';

const maxBalance = 9999;

const findBalance = (num) => {
  let sumNum = 0;
  for (let i = 0; i < num.length; i += 1) {
    sumNum += Number(num[i]);
  }
  const baseNum = Math.floor(sumNum / num.length);
  const remain = sumNum % num.length;

  const subBalance = (acc, subAcc) => {
    if (acc.length >= num.length) {
      return acc;
    }
    if (subAcc > 0) {
      return subBalance(`${baseNum + 1}${acc}`, subAcc - 1);
    }
    return subBalance(`${baseNum}${acc}`, 0);
  };
  return subBalance('', remain);
};

export const brainGamesBalance = (name) => {
  const question = generateRandomNumber(maxBalance);
  const userAnswer = askQuestion(question);
  const correctAnswer = findBalance(question);
  checkAnswer(userAnswer, correctAnswer, name);
};
