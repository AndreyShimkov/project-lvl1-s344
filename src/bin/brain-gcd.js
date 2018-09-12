#!/usr/bin/env node

import { brainGamesMain } from '..';
import { gameRules, brainGamesGcd } from './games/brain-gcd-game';

brainGamesMain(gameRules, brainGamesGcd);
