
import { brainGamesMain, generateRandomNumber, cons } from '..';

const maxNumber = 100;

const gameRules = 'Is this number prime?';


const brainPrimePair = () => {
  const question = generateRandomNumber(maxNumber);

  const isPrime = (number) => {
    const iter = (acc, num) => {
      if (acc > num / 2) {
        return true;
      }
      return num % acc === 0 ? false : iter(acc + 1, num);
    };
    return iter(2, number);
  };

  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

export default () => brainGamesMain(gameRules, brainPrimePair);
