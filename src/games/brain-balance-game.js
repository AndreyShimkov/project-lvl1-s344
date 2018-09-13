
import { brainGamesMain, generateRandomNumber, cons } from '..';

const gameRules = 'Balance the given number.';

const maxBalance = 9999;

const brainBalancePair = () => {
  const findBalance = (num) => {
    const sumNum = Array.prototype.reduce.call(num, (acc, value) => acc + Number(value), 0);
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

  const question = `${generateRandomNumber(maxBalance)}`;
  const correctAnswer = findBalance(question);
  return cons(question, correctAnswer);
};

export default () => brainGamesMain(gameRules, brainBalancePair);
