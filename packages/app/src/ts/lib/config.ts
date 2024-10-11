import {localJsonStorage, createLogger, packageTracer, type FetchOptions} from 'alwatr/nanolib';

__dev_mode__: packageTracer.add(__package_name__, __package_version__);

export const logger = createLogger(__package_name__)
logger.logFileModule?.('config');

/**
 * Debug API.
 *
 * ```ts
 * localStorage.setItem('debugApi.v1', JSON.stringify({url: "http://localhost:8000/"}))
 * ```
 */

const srvBaseUrl = localJsonStorage.getItem<{url: string}>('debugApi', {url: '/'}, 1).url;
const apiBaseUrl = srvBaseUrl + 'api/v1/';

export const config = {
  api: {
    base: srvBaseUrl,
    cdn: apiBaseUrl + 'cdn',
  } as const,

  fetchOptions: {
    retry: 2,
    retryDelay: 2_000,
    removeDuplicate: 'auto',
  } as Partial<FetchOptions>,
} as const;
