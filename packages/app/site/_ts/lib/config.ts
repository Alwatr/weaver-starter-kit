import {definePackage} from '@alwatr/logger';
import {getLocalStorageItem} from '@alwatr/util';

import type {} from '@alwatr/nano-build';
import type {ServerRequestConfig} from '@alwatr/server-context';

export const logger = definePackage('@alwatr/weaver-app', __package_version__);

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
