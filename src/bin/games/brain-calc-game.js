
import { brainGamesMain, generateRandomNumber, cons } from '../..';

const maxOperations = 3;

const gameRules = 'What is the result of the expression?';

const number1 = generateRandomNumber();
const number2 = generateRandomNumber();
const operation = generateRandomNumber(maxOperations);

let question;
let correctAnswer;

if (operation === 1) {
  question = `${number1} + ${number2}`;
  correctAnswer = `${number1 + number2}`;
} else if (operation === 2) {
  question = `${number1} - ${number2}`;
  correctAnswer = `${number1 - number2}`;
} else {
  question = `${number1} * ${number2}`;
  correctAnswer = `${number1 * number2}`;
}

const brainGamesCalc = () => cons(question, correctAnswer);

export default () => brainGamesMain(gameRules, brainGamesCalc);
