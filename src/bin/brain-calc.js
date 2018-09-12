#!/usr/bin/env node

import { brainGamesMain } from '..';
import { gameRules, brainGamesCalc } from './games/brain-calc-game';

brainGamesMain(gameRules, brainGamesCalc);
