import {localJsonStorage} from '@alwatr/local-storage';
import {createLogger} from '@alwatr/logger';
import {packageTracer} from '@alwatr/package-tracer';

import type {FetchOptions} from '@alwatr/flux';

export const logger = createLogger(__package_name__);
packageTracer.add(__package_name__, __package_version__);

logger.logFileModule?.('config');

/**
 * Debug API.
 *
 * ```ts
 * localStorage.setItem('debugApi.v1', '{"url":"https://api.domain.com/"}');
 * ```
 */
const srvBaseUrl = localJsonStorage.getItem('debugApi', {url: '/'}, 1);
const apiBaseUrl = srvBaseUrl + 'api/v0/';

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
