import {definePackage} from '@alwatr/dedupe';

import type {} from '@alwatr/nano-build';

export * from './types/main.js';
export * from './constant.js';
export * from './validate-national-code.js';

definePackage('@alwatr/weaver-common', __package_version__);
