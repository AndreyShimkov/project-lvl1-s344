
import { brainGamesMain, generateRandomNumber, cons } from '..';

const gameRules = 'What number is missing in this progression?';

const maxProgression = 10;

const brainProgressionPair = () => {
  const missedNumber = generateRandomNumber(maxProgression);
  const firstProgressionNumber = generateRandomNumber();
  const progressionDiff = generateRandomNumber();

  const generateProgression = (acc, progression) => {
    if (acc > maxProgression) {
      return progression;
    }
    const number = (acc === missedNumber) ? '.. ' : firstProgressionNumber + progressionDiff * acc;
    return generateProgression(acc + 1, `${progression} ${number}`);
  };
  const question = generateProgression(0, '');
  const correctAnswer = `${firstProgressionNumber + progressionDiff * missedNumber}`;
  return cons(question, correctAnswer);
};

export default () => brainGamesMain(gameRules, brainProgressionPair);
