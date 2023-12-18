import {createLogger, definePackage} from '@alwatr/logger';
import {getLocalStorageItem} from '@alwatr/util';

import type {ServerRequestConfig} from '@alwatr/server-context';

definePackage('pmpa-app', '0.x');

export const logger = createLogger('@alwatr/pmpa');

/**
 * Debug API.
 *
 * ```ts
 * localStorage.setItem('debugApi', '"https://alwatr.ir/"');
 * ```
 */
const srvBaseUrl = getLocalStorageItem('debugApi', '/');
const apiBaseUrl = srvBaseUrl + 'api/v0/';

export const config = {
  api: {
    base: srvBaseUrl,
    cdn: apiBaseUrl + 'cdn',
  } as const,

  fetchOptions: {
    removeDuplicate: 'auto',
    retry: 2,
    retryDelay: 2_000,
  } as Partial<ServerRequestConfig>,
} as const;
