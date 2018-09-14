
import { brainGamesMain, generateRandomNumber, cons } from '..';

const gameRules = 'What number is missing in this progression?';

const progressionLength = 10;

const brainProgressionPair = () => {
  const missedNumber = generateRandomNumber(progressionLength);

  const firstProgressionNumber = generateRandomNumber();
  const progressionDiff = generateRandomNumber();
  const progression = n => firstProgressionNumber + (n - 1) * progressionDiff;

  const generateProgression = (num, result) => {
    if (num > progressionLength) {
      return result;
    }
    const number = (num === missedNumber) ? '..' : progression(num);
    return generateProgression(num + 1, `${result} ${number}`);
  };

  const question = generateProgression(0, '');
  const correctAnswer = `${firstProgressionNumber + progressionDiff * missedNumber}`;
  return cons(question, correctAnswer);
};

export default () => brainGamesMain(gameRules, brainProgressionPair);
