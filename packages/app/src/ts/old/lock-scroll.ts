import {logger} from '../lib/config.js';

logger.logFileModule?.('lock-scroll');

window.addEventListener('request-drawer-open', () => {
  logger.logMethod?.('scroll-locked');
  document.documentElement.classList.add('overflow-hidden');
});

window.addEventListener('request-drawer-close', () => {
  logger.logMethod?.('scroll-unlocked');
  document.documentElement.classList.remove('overflow-hidden');
});
