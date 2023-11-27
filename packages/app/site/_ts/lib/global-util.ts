import {logger} from './logger.js';

logger.logModule?.('global-util');

declare global {
  interface Window {
    clearLocalStorage: typeof clearLocalStorage;
    devMode: typeof devMode;
  }
}

export function clearLocalStorage() {
  logger.logMethod?.('clearLocalStorage');
  localStorage.clear();
  if (logger.devMode) {
    localStorage.setItem('alwatrDebug', '1');
  }
}

export function devMode() {
  logger.logMethod?.('devMode');
  localStorage.setItem('alwatrDebug', '1');
  location.reload();
}

window.clearLocalStorage = clearLocalStorage;
window.devMode = devMode;
