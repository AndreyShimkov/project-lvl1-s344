#!/usr/bin/env node

import { brainGamesMain } from '..';
import { gameRules, brainGamesEven } from './games/brain-even-game';

brainGamesMain(gameRules, brainGamesEven);
