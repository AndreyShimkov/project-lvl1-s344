
import { generateRandomNumber, askQuestion, checkAnswer } from '../..';

export const gameRules = 'Answer "yes" if number even otherwise answer "no"';

export const brainGamesEven = (name) => {
  const question = generateRandomNumber();
  const userAnswer = askQuestion(question);
  const correctAnswer = number => (number % 2 !== 0 ? 'no' : 'yes');
  checkAnswer(userAnswer, correctAnswer, name);
};
