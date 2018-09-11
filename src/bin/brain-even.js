#!/usr/bin/env node

import askName from '..';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no"');
const name = askName();
const wrongAnswer = (answer, correctAnswer) => {
  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer})`);
};
const askQuestion = (num) => {
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  const numIsEven = num % 2 !== 0 || num === 0 ? 'no' : 'yes';
  if (answer === numIsEven) {
    console.log('Correct!');
  } else {
    wrongAnswer(answer, numIsEven);
  }
};

askQuestion(15);
askQuestion(6);
askQuestion(7);
console.log(`Congratulations, ${name}`);
