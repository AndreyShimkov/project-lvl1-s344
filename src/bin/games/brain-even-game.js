
import {
  brainGamesMain, generateRandomNumber, askQuestion, checkAnswer,
} from '../..';

const gameRules = 'Answer "yes" if number even otherwise answer "no"';

const brainGamesEven = (name) => {
  const question = generateRandomNumber();
  const userAnswer = askQuestion(question);
  const correctAnswer = question % 2 !== 0 ? 'no' : 'yes';
  checkAnswer(userAnswer, correctAnswer, name);
};

export default () => brainGamesMain(gameRules, brainGamesEven);
