
import { brainGamesMain, generateRandomNumber, cons } from '..';

const maxNumber = 9999;

const gameRules = 'Is this number prime?';


const brainPrimePair = () => {
  const question = generateRandomNumber(maxNumber);

  const isPrime = (number) => {
    const funcIsPrime = (acc, num) => {
      if (acc > num / 2) {
        return 'yes';
      }
      return num % acc === 0 ? 'no' : funcIsPrime(acc + 1, num);
    };
    return funcIsPrime(0, number);
  };

  const correctAnswer = isPrime(question);

  return cons(question, correctAnswer);
};

export default () => brainGamesMain(gameRules, brainPrimePair);
