import {platformInfo} from '@alwatr/platform-info';
import {waitForAnimationFrame} from '@alwatr/wait';

import {logger} from './config.js';

logger.logModule?.('keep-scroll');

async function keepScroll() {
  const container = document.querySelector('main.overflow-y-scroll');
  if (!container) return;

  await waitForAnimationFrame();

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
