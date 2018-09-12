#!/usr/bin/env node

import { brainGamesMain } from '..';
import { gameRules, brainGamesBalance } from './games/brain-balance-game';

brainGamesMain(gameRules, brainGamesBalance);
