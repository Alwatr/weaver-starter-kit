import {delay, platformInfo} from 'alwatr/nanolib';

import {logger} from '../lib/config.js';

logger.logFileModule?.('keep-scroll');

async function keepScroll() {
  const container = document.querySelector('main.overflow-y-scroll');
  if (!container) return;

  await delay.untilNextAnimationFrame();

  const scrollPosition = localStorage.getItem('scrollPosition');
  logger.logMethodArgs?.('restoreScrollPosition', scrollPosition);
  if (scrollPosition) {
    container.scrollTo({
      top: +scrollPosition,
      behavior: 'smooth',
    });
  }

  window.addEventListener('unload', () => {
    const scrollPosition = container.scrollTop.toString();
    logger.logMethodArgs?.('saveScrollPosition', scrollPosition);
    localStorage.setItem('scrollPosition', scrollPosition);
  });
}

if (platformInfo.development === true) keepScroll();
