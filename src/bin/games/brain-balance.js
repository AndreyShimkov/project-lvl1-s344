#!/usr/bin/env node

import { askName, brainGamesBalance } from '../..';

console.log('Welcome to the Brain Games!');
console.log('Find the greatest common divisor of given numbers.');
const name = askName();

brainGamesBalance(name);

console.log(`Congratulations, ${name}`);
