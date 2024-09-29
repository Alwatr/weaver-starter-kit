import {localJsonStorage} from '@alwatr/local-storage';
import {definePackage} from '@alwatr/logger';

import type {FetchOptions} from '@alwatr/flux';

export const logger = definePackage('@alwatr/weaver-app', __package_version__);
logger.logModule?.('config');

/**
 * Debug API.
 *
 * ```ts
 * localStorage.setItem('debugApi.v1', '"https://api.domain.com/"');
 * ```
 */
const srvBaseUrl = localJsonStorage.getItem('debugApi', '/', 1);
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
