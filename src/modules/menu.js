#!/usr/bin/env node

import readlineSync from 'readline-sync';
import brainBalanceStart from '../games/brain-balance-game';
import brainCalcStart from '../games/brain-calc-game';
import brainEvenStart from '../games/brain-even-game';
import brainGcdStart from '../games/brain-gcd-game';
import brainPrimeStart from '../games/brain-prime-game';
import brainProgressionStart from '../games/brain-progression-game';

const greetings = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Content:');
  console.log('1 - Brain Balance');
  console.log('2 - Brain Calc');
  console.log('3 - Brain Even');
  console.log('4 - Brain Gcd');
  console.log('5 - Brain Prime');
  console.log('6 - Brain Progression');
  console.log('0 - Exit');
};

let gameNumber;

do {
  greetings();
  gameNumber = readlineSync.question('Select a game (number): ');
  if (gameNumber === '0') {
    console.log('Bye.');
  } else if (gameNumber === '1') {
    brainBalanceStart();
  } else if (gameNumber === '2') {
    brainCalcStart();
  } else if (gameNumber === '3') {
    brainEvenStart();
  } else if (gameNumber === '4') {
    brainGcdStart();
  } else if (gameNumber === '5') {
    brainPrimeStart();
  } else if (gameNumber === '6') {
    brainProgressionStart();
  } else {
    console.log('Incorrect number. Please try again.');
  }
} while (gameNumber !== '0');
