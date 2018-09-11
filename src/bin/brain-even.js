#!/usr/bin/env node

import askName from '..';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no"');
const name = askName();

const checkAnswer = (answer, correctAnswer) => {
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
    console.log(`Let's try again, ${name}`);
  }
};
const askQuestion = (num) => {
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = num % 2 !== 0 || num === 0 ? 'no' : 'yes';
  checkAnswer(answer, correctAnswer);
};
const main = () => {
  let number;
  for (let i = 1; i < 3; i += 1) {
    number = Math.random() * 100;
    askQuestion(number);
  }
};

main();
console.log(`Congratulations, ${name}`);
