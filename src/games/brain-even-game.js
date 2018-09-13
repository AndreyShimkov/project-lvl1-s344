
import { brainGamesMain, generateRandomNumber, cons } from '..';

const gameRules = 'Answer "yes" if number even otherwise answer "no"';

const brainEvenPair = () => {
  const question = generateRandomNumber();
  const correctAnswer = question % 2 !== 0 ? 'no' : 'yes';
  return cons(question, correctAnswer);
};

export default () => brainGamesMain(gameRules, brainEvenPair);
