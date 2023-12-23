import {logger} from './config';

logger.logModule?.('register-service-worker');

const serviceWorkerPath = '/es/service-worker';

function registerServiceWorker(serviceWorkerPath: string) {
  logger.logMethod?.('registerServiceWorker');

  navigator.serviceWorker
    .register(serviceWorkerPath)
    .then(() => {
      logger.logOther?.('Service worker registered.');
    })
    .catch((error) => {
      logger.error('registerServiceWorker', 'registration_failed ', {error});
    });
}

if ('serviceWorker' in navigator) {
  registerServiceWorker(serviceWorkerPath);
}
