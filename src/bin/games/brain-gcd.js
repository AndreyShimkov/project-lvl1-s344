#!/usr/bin/env node

import { askName, brainGamesGcd } from '../..';

console.log('Welcome to the Brain Games!');
console.log('Find the greatest common divisor of given numbers.');
const name = askName();

brainGamesGcd(name);

console.log(`Congratulations, ${name}`);
