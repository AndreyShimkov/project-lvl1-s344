#!/usr/bin/env node

import { askName, brainGamesCalc } from '../..';

console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?');
const name = askName();

brainGamesCalc(name);

console.log(`Congratulations, ${name}`);
