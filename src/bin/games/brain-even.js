#!/usr/bin/env node

import { askName, brainGamesEven } from '../..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no"');
const name = askName();

brainGamesEven(name);

console.log(`Congratulations, ${name}`);
