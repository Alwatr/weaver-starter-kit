import {writeFile} from 'fs/promises';
import {generateSW} from 'workbox-build';
import {logger} from './logger.mjs';

const deploymentServiceWorkerContent = "console.log('service worker not build in deployment.')";
const serviceWorkerDest = 'dist/service-worker.js';

export async function generateServiceWorker() {
  if (process.env.NODE_ENV !== 'production') {
    logger.logMethodArgs?.('generateServiceWorker', {mode: 'deployment'});
    return writeFile(serviceWorkerDest, deploymentServiceWorkerContent);
  }

  logger.logMethodArgs?.('generateServiceWorker', {mode: 'production'});
  return generateSW({
    globDirectory: 'dist',
    clientsClaim: true,
    skipWaiting: true,
    // globPatterns: ['**/*.{svg,woff2,jpg,jpeg,png,html,js,css,json,webmanifest,webp}', 'index.html', 'favicon.ico'],
    globPatterns: ['**/*.{woff2,js,css,webmanifest}', 'index.html', 'favicon.ico'],
    swDest: serviceWorkerDest,
    sourcemap: false,
    mode: 'production',
    runtimeCaching: [
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'images',
          expiration: {
            maxEntries: 200,
            maxAgeSeconds: 2 * 30 * 24 * 60 * 60, // 2 Months
          },
        },
      },
      {
        urlPattern: /\.(?:html|js|css|json)$/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'resources',
          expiration: {
            maxEntries: 200,
            maxAgeSeconds: 2 * 30 * 24 * 60 * 60, // 2 Months
          },
        },
      },
    ],
  });
}
