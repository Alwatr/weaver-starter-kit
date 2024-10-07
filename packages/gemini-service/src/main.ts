import {generateDataByGeminiAPI} from './lib/ai-process.js';
import {logger} from './lib/config.js';

logger.banner('Exir-gemini-service');

generateDataByGeminiAPI();
