# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.6.2](https://github.com/Alwatr/weaver/compare/v1.6.1...v1.6.2) (2024-04-03)

### Bug Fixes

* add base version ([555639d](https://github.com/Alwatr/weaver/commit/555639dc150461063fbe64e95b52108d2ea5ef0c)) by @

## [1.6.1](https://github.com/Alwatr/weaver/compare/v1.6.0...v1.6.1) (2024-04-02)

### Performance Improvements

* **app/scripts:** Fix icon name parsing in alwatrIcon function ([a1102ee](https://github.com/Alwatr/weaver/commit/a1102ee112df802ad06678dafcb0602f074a1925)) by @AliMD

### Code Refactoring

* **app/scripts:** Refactor font path in copyFont function ([ff89a93](https://github.com/Alwatr/weaver/commit/ff89a9397dc83a4dc1a7f5f8564473aa9ac0b121)) by @AliMD

## [1.6.0](https://github.com/Alwatr/weaver/compare/v1.5.0...v1.6.0) (2024-04-02)

### Features

* **app/script:** Add import for generateServiceWorker and comment out generateServiceWorker call ([90d3dd6](https://github.com/Alwatr/weaver/commit/90d3dd617dd7c874bda60320476ff9fbb3c6b7de)) by @AliMD
* **app/script:** Add service worker generation code ([784dcb3](https://github.com/Alwatr/weaver/commit/784dcb3eaecac3f2729f4b112ab38d2679c81849)) by @AliMD
* **app/script:** convert logger.cjs to logger.mjs ([15d58f7](https://github.com/Alwatr/weaver/commit/15d58f7feec1b2b33e7a01aeb8d728b479d9f12c)) by @AliMD
* **app/script:** Fix cache check in alwatrIcon function ([cd93eb8](https://github.com/Alwatr/weaver/commit/cd93eb8edcce9fbb045d77a31f47f8883577b641)) by @AliMD
* **app/script:** Refactor fontPath in copyFont function ([1d22e9a](https://github.com/Alwatr/weaver/commit/1d22e9ad0b08410008f53c6fe07de85462bad6cf)) by @AliMD
* **app/script:** Refactor service worker registration and add event handlers ([064ff3b](https://github.com/Alwatr/weaver/commit/064ff3ba5175b7bf6b8999cf3d2673f18080868c)) by @AliMD
* **app/script:** Update logger import in build script ([4302d7d](https://github.com/Alwatr/weaver/commit/4302d7ddfd75361352a1de45d04f0568158a573d)) by @AliMD
* **app/script:** Update logger import in minify-html.mjs ([8057b99](https://github.com/Alwatr/weaver/commit/8057b995d6b51401c6c2785a309905530ae1f3dc)) by @AliMD
* **app/script:** Update postcss.mjs imports and file paths ([968573b](https://github.com/Alwatr/weaver/commit/968573beb0c0f21b4b07880de564b18c45625146)) by @AliMD

## [1.5.0](https://github.com/Alwatr/weaver/compare/v1.3.0...v1.5.0) (2024-04-02)

### Features

* **app/postcss:** add postcss-viewport-unit-fallback ([16c3552](https://github.com/Alwatr/weaver/commit/16c3552a5ab6576de7cdf3e78beaa6019082d4c6)) by @njfamirm
* **app:** new layout ([1fb49b0](https://github.com/Alwatr/weaver/commit/1fb49b0f7789ae3aa84dc176a43d28901f51bf20)) by @njfamirm

### Bug Fixes

* **app/assets:** support windows path for copy font ([f2e16ca](https://github.com/Alwatr/weaver/commit/f2e16caf577f9051f60a9bb7d6f2e4fcd12b355d)) by @njfamirm
* **app/scripts:** export in logger ([238ce67](https://github.com/Alwatr/weaver/commit/238ce676b3518433831f64d9ce2982cc8de9ddf0)) by @njfamirm
* **app/shortcode:** function name and logger ([ec4bb68](https://github.com/Alwatr/weaver/commit/ec4bb683d35cbd764517d19c5342a809805b60e4)) by @njfamirm
* **app/shortcode:** use async shortcode for alwatr icon ([17e2cf5](https://github.com/Alwatr/weaver/commit/17e2cf5ba2c183395c27a18cc5c7b51fc2509cb4)) by @njfamirm
* **app:** install types node ([f00f972](https://github.com/Alwatr/weaver/commit/f00f97215fabc77c0e7c00866f0fb734a7b035cf)) by @njfamirm
* **app:** issue ([89e4ee0](https://github.com/Alwatr/weaver/commit/89e4ee0a79d53f94e0e31bb78f010b7fbe3657b3)) by @AliMD
* change logger to cjs ([fb9be57](https://github.com/Alwatr/weaver/commit/fb9be576a0616e51122f1fab64fa26276c3be802)) by @njfamirm

### Performance Improvements

* **app/shortcode:** use cache for alwatr icon ([b131131](https://github.com/Alwatr/weaver/commit/b13113106590827cb34f9e80778fb57ebe99be8a)) by @njfamirm

### Code Refactoring

* **alwatr-icon:** use size instead w/h ([e682726](https://github.com/Alwatr/weaver/commit/e682726e5114e565246eeee34fa81ef26d452c97)) by @AliMD
* **app/shortcode:** rewrite and fix class cache issue ([b713fdb](https://github.com/Alwatr/weaver/commit/b713fdb5a84e0087115c9ef18604690b20c5a90f)) by @njfamirm
* **app:** global alwatr icon style ([cac1550](https://github.com/Alwatr/weaver/commit/cac15507247692199c857a0e5f71068e1808fda2)) by @njfamirm
* **app:** move fa data to root of site ([1dc50fe](https://github.com/Alwatr/weaver/commit/1dc50fe1fbf9b2f2503203a847ca9fb752190686)) by @njfamirm

### Miscellaneous Chores

* **app/dockerfile:** image base name ([dfe9042](https://github.com/Alwatr/weaver/commit/dfe90422988fe6aaaa656fce1673eb2b2b204c89)) by @njfamirm
* **app/meta:** disable Content-Security-Policy tmp ([06dc4e3](https://github.com/Alwatr/weaver/commit/06dc4e30b74ae57663dac075fb14d8b95e3d3864)) by @njfamirm
* fix dockerfile labels ([2f876bd](https://github.com/Alwatr/weaver/commit/2f876bde86139cc37919085a3c029f51d324f37d)) by @

## [1.4.1](https://github.com/Alwatr/weaver/compare/v1.4.0...v1.4.1) (2024-03-04)

### Bug Fixes

* **app/scripts:** export in logger ([238ce67](https://github.com/Alwatr/weaver/commit/238ce676b3518433831f64d9ce2982cc8de9ddf0)) by @njfamirm
* **app/shortcode:** function name and logger ([ec4bb68](https://github.com/Alwatr/weaver/commit/ec4bb683d35cbd764517d19c5342a809805b60e4)) by @njfamirm
* **app:** install types node ([f00f972](https://github.com/Alwatr/weaver/commit/f00f97215fabc77c0e7c00866f0fb734a7b035cf)) by @njfamirm
* change logger to cjs ([fb9be57](https://github.com/Alwatr/weaver/commit/fb9be576a0616e51122f1fab64fa26276c3be802)) by @njfamirm

### Code Refactoring

* **app/shortcode:** rewrite and fix class cache issue ([b713fdb](https://github.com/Alwatr/weaver/commit/b713fdb5a84e0087115c9ef18604690b20c5a90f)) by @njfamirm

## [1.4.0](https://github.com/Alwatr/weaver/compare/v1.3.0...v1.4.0) (2024-03-04)

### Features

* **app/postcss:** add postcss-viewport-unit-fallback ([16c3552](https://github.com/Alwatr/weaver/commit/16c3552a5ab6576de7cdf3e78beaa6019082d4c6)) by @njfamirm
* **app:** new layout ([1fb49b0](https://github.com/Alwatr/weaver/commit/1fb49b0f7789ae3aa84dc176a43d28901f51bf20)) by @njfamirm

### Bug Fixes

* **app/assets:** support windows path for copy font ([f2e16ca](https://github.com/Alwatr/weaver/commit/f2e16caf577f9051f60a9bb7d6f2e4fcd12b355d)) by @njfamirm
* **app/shortcode:** use async shortcode for alwatr icon ([17e2cf5](https://github.com/Alwatr/weaver/commit/17e2cf5ba2c183395c27a18cc5c7b51fc2509cb4)) by @njfamirm
* **app:** issue ([89e4ee0](https://github.com/Alwatr/weaver/commit/89e4ee0a79d53f94e0e31bb78f010b7fbe3657b3)) by @AliMD

### Performance Improvements

* **app/shortcode:** use cache for alwatr icon ([b131131](https://github.com/Alwatr/weaver/commit/b13113106590827cb34f9e80778fb57ebe99be8a)) by @njfamirm

### Code Refactoring

* **alwatr-icon:** use size instead w/h ([e682726](https://github.com/Alwatr/weaver/commit/e682726e5114e565246eeee34fa81ef26d452c97)) by @AliMD
* **app:** global alwatr icon style ([cac1550](https://github.com/Alwatr/weaver/commit/cac15507247692199c857a0e5f71068e1808fda2)) by @njfamirm
* **app:** move fa data to root of site ([1dc50fe](https://github.com/Alwatr/weaver/commit/1dc50fe1fbf9b2f2503203a847ca9fb752190686)) by @njfamirm

### Miscellaneous Chores

* **app/dockerfile:** image base name ([dfe9042](https://github.com/Alwatr/weaver/commit/dfe90422988fe6aaaa656fce1673eb2b2b204c89)) by @njfamirm
* **app/meta:** disable Content-Security-Policy tmp ([06dc4e3](https://github.com/Alwatr/weaver/commit/06dc4e30b74ae57663dac075fb14d8b95e3d3864)) by @njfamirm

## [1.4.0](https://github.com/Alwatr/weaver/compare/v1.3.0...v1.4.0) (2024-03-04)

### Features

* **app/postcss:** add postcss-viewport-unit-fallback ([16c3552](https://github.com/Alwatr/weaver/commit/16c3552a5ab6576de7cdf3e78beaa6019082d4c6)) by @njfamirm
* **app:** new layout ([1fb49b0](https://github.com/Alwatr/weaver/commit/1fb49b0f7789ae3aa84dc176a43d28901f51bf20)) by @njfamirm

### Bug Fixes

* **app/assets:** support windows path for copy font ([710fb0c](https://github.com/Alwatr/weaver/commit/710fb0c4264768c991a32483206993b3c7c601cb)) by @njfamirm
* **app/shortcode:** use async shortcode for alwatr icon ([17e2cf5](https://github.com/Alwatr/weaver/commit/17e2cf5ba2c183395c27a18cc5c7b51fc2509cb4)) by @njfamirm
* **app:** issue ([89e4ee0](https://github.com/Alwatr/weaver/commit/89e4ee0a79d53f94e0e31bb78f010b7fbe3657b3)) by @AliMD

### Performance Improvements

* **app/shortcode:** use cache for alwatr icon ([b131131](https://github.com/Alwatr/weaver/commit/b13113106590827cb34f9e80778fb57ebe99be8a)) by @njfamirm

### Code Refactoring

* **alwatr-icon:** use size instead w/h ([e682726](https://github.com/Alwatr/weaver/commit/e682726e5114e565246eeee34fa81ef26d452c97)) by @AliMD
* **app:** global alwatr icon style ([cac1550](https://github.com/Alwatr/weaver/commit/cac15507247692199c857a0e5f71068e1808fda2)) by @njfamirm
* **app:** move fa data to root of site ([1dc50fe](https://github.com/Alwatr/weaver/commit/1dc50fe1fbf9b2f2503203a847ca9fb752190686)) by @njfamirm

### Miscellaneous Chores

* **app/dockerfile:** image base name ([dfe9042](https://github.com/Alwatr/weaver/commit/dfe90422988fe6aaaa656fce1673eb2b2b204c89)) by @njfamirm
* **app/meta:** disable Content-Security-Policy tmp ([06dc4e3](https://github.com/Alwatr/weaver/commit/06dc4e30b74ae57663dac075fb14d8b95e3d3864)) by @njfamirm

## [1.3.0](https://github.com/Alwatr/weaver/compare/v1.2.2...v1.3.0) (2024-02-12)

### Features

* **app:** add content security policy meta ([60361bb](https://github.com/Alwatr/weaver/commit/60361bb2a9eace244f21cdefc8405672b1a50357)) by @

## [1.2.2](https://github.com/Alwatr/weaver/compare/v1.2.1...v1.2.2) (2024-02-11)

### Bug Fixes

* **app:** 404 page ([38aab53](https://github.com/Alwatr/weaver/commit/38aab53ead4c4d37be7dc034482be3920f400fe3)) by @njfamirm

### Code Refactoring

* **app:** move body from naked to base ([7bb4f46](https://github.com/Alwatr/weaver/commit/7bb4f4667edb782015d3d9fd8870d290d6e1bf21)) by @njfamirm

## [1.2.1](https://github.com/Alwatr/weaver/compare/v1.2.0...v1.2.1) (2024-2-7)

**Note:** Version bump only for package @alwatr/weaver-app

## [1.2.0](https://github.com/Alwatr/weaver/compare/v1.1.2...v1.2.0) (2024-2-7)

### Features

* **app/layout:** base structure ([8b783bd](https://github.com/Alwatr/weaver/commit/8b783bd350220eadbc738ec6cd460e5a5328943f)) by @njfamirm
* **app:** 404 page ([5b051d5](https://github.com/Alwatr/weaver/commit/5b051d5bd63d8973860adc54b80395899bef701e)) by @njfamirm
* **app:** naked layout ([f839f12](https://github.com/Alwatr/weaver/commit/f839f12a8590ed960f92a13f07c0c93c1a401061)) by @njfamirm
* **types:** new package ([fe09ba6](https://github.com/Alwatr/weaver/commit/fe09ba61bc554eb5f595297fcd2bb9e313f6d646)) by @njfamirm

### Bug Fixes

* **app/11ty:** config type issue ([25b564e](https://github.com/Alwatr/weaver/commit/25b564ef0be48cbeef7c77c02ead2ff22a44396c)) by @njfamirm
* **app:** change path ([89e3505](https://github.com/Alwatr/weaver/commit/89e35052284e8d081807fa6c5e0a54d19499b02e)) by @njfamirm
* **app:** image version name ([454c35f](https://github.com/Alwatr/weaver/commit/454c35fb338041b486d8158736d5c587dc525e4a)) by @njfamirm

### Miscellaneous Chores

* **app:** remove no index ([aa856b0](https://github.com/Alwatr/weaver/commit/aa856b0a47c78c567b107b9d59785de895dbd0fe)) by @njfamirm

## [1.1.2](https://github.com/Alwatr/weaver/compare/v1.1.1...v1.1.2) (2024-02-05)

### Bug Fixes

* **app:** site url for production ([794a9c6](https://github.com/Alwatr/weaver/commit/794a9c6663632cf5607104c1e7015c49e8bf8496)) by @njfamirm
* **deps:** remove extra ([e931175](https://github.com/Alwatr/weaver/commit/e931175a758a9c51f7e2c0a1607afc3fefe1b53c)) by @njfamirm

### Code Refactoring

* **app:** remove no index ([937ae38](https://github.com/Alwatr/weaver/commit/937ae38f02440150bfc13f3d6e63de9e7015580d)) by @njfamirm

### Miscellaneous Chores

* **deps:** update ([e829e7e](https://github.com/Alwatr/weaver/commit/e829e7ec56dd8d38de9a6fbd3618efa8cb655465)) by @AliMD

## [1.1.1](https://github.com/Alwatr/weaver/compare/v1.1.0...v1.1.1) (2024-01-16)

### Bug Fixes

- **app:** debugMode in logger ([a86cf76](https://github.com/Alwatr/weaver/commit/a86cf76bbbbe9b669b64703f66342876dcb7a7d7)) by @njfamirm
- **app:** start script ([d577af7](https://github.com/Alwatr/weaver/commit/d577af7fd4064e76ccac82afd9a0242952015a38)) by @MM25Zamanian
- define package scope ([335bfa2](https://github.com/Alwatr/weaver/commit/335bfa29f9330bbbaebeffa17fbe038336e13ae6)) by @njfamirm

### Code Refactoring

- **app/keep-scroll:** ensure deployment mode from platform info package ([d83a60d](https://github.com/Alwatr/weaver/commit/d83a60d4bd81a887a7e0ad3d9c56f92215087378)) by @njfamirm
- update env name for logger enable mode ([d317dce](https://github.com/Alwatr/weaver/commit/d317dce979a3b5cb311a44c787f5ff077e9f6c80)) by @njfamirm
- use definePackage logger ([cc0d017](https://github.com/Alwatr/weaver/commit/cc0d017b11644c501080f708785ab80fcc476f23)) by @njfamirm

### Miscellaneous Chores

- **app:** build logger name ([731b13a](https://github.com/Alwatr/weaver/commit/731b13ad5ec5598f9396344af190ca043c8e0872)) by @njfamirm
- **deps:** update all deps using upd command ([ebb6d7a](https://github.com/Alwatr/weaver/commit/ebb6d7aa0115706d42009f770c76f9a40d31db09)) by @njfamirm
- remove tsconfig outDir ([e713b0a](https://github.com/Alwatr/weaver/commit/e713b0a48ace5b1ea9185e7fff42f240af40c0f4)) by @njfamirm

# [1.1.0](https://github.com/Alwatr/weaver/compare/v1.0.0...v1.1.0) (2023-12-24)

### Features

- **app/11ty:** slugify filter ([8af2631](https://github.com/Alwatr/weaver/commit/8af26310b687e518d9d42c01187fef2438e15707)) by @njfamirm
- **app/script:** dynamic font copy ([e34f3e4](https://github.com/Alwatr/weaver/commit/e34f3e49149497053b4874e3eef5cb1b1b47e052)) by @njfamirm

# 1.0.0 (2023-12-23)

### Bug Fixes

- **api/docker:** label ([04e8e66](https://github.com/Alwatr/weaver/commit/04e8e666914c65f364cdcc16d7604461d2cc9f79)) by @AliMD
- **app/11ty:** use config ([dc65bc3](https://github.com/Alwatr/weaver/commit/dc65bc30417fc7438cd6a8d7bcf5c5cc3825f57a)) by @njfamirm
- **app/build:** change esbuld target ([8754aa7](https://github.com/Alwatr/weaver/commit/8754aa784780bad705c5f858e34471af5999cb9b)) by @njfamirm
- **app/deploy:** dockerfile ([69ae72d](https://github.com/Alwatr/weaver/commit/69ae72d8528a64edf83ff417090e922703875b19)) by @AliMD
- **app/include:** prerender data ([0967cdf](https://github.com/Alwatr/weaver/commit/0967cdf5626f85cd66203566bb4f97d54e8a031d)) by @njfamirm
- **app/layout:** remove crossorigin from preload link ([e3dd492](https://github.com/Alwatr/weaver/commit/e3dd492bd5b0b9c3573b6d57c3cb037400762a0b)) by @njfamirm
- **app:** browser list ([5c1eb90](https://github.com/Alwatr/weaver/commit/5c1eb903f5f369caef04c340c80ccc64a5242f31)) by @njfamirm
- **app:** import path ([72897ed](https://github.com/Alwatr/weaver/commit/72897ed7923b5e4ca522c28d5f0c24a841f1e183)) by @njfamirm
- **app:** tsconfig root ([96dbe6f](https://github.com/Alwatr/weaver/commit/96dbe6fe23dde862a2078483179f63f7b704bc3c)) by @njfamirm
- **build:** move devMode to logger ([dadcce1](https://github.com/Alwatr/weaver/commit/dadcce168c21640b182cc50924850df9ccae4063)) by @njfamirm

### Features

- **api:** build scripts ([8b54c83](https://github.com/Alwatr/weaver/commit/8b54c8382fced0798e3fb48788da7db22f5ebe74)) by @njfamirm
- **app:** .html suffix for urls ([647146a](https://github.com/Alwatr/weaver/commit/647146ab1f65dcfaf03d3a0486e244ef1fe3526e)) by @njfamirm
- **app/11ty:** add directory output plugin ([a8966b3](https://github.com/Alwatr/weaver/commit/a8966b3b06f1d90199143b1c57f969be584572d5)) by @njfamirm
- **app/11ty:** add directory output plugin ([2785ff3](https://github.com/Alwatr/weaver/commit/2785ff3673777ae7731158f4f3fe01b7feb58df2)) by @njfamirm
- **app/11ty:** add utils ([5bbaef8](https://github.com/Alwatr/weaver/commit/5bbaef867638a6513ce4d6f5c4a0b57b3948923c)) by @njfamirm
- **app/11ty:** add watch target ([9e31bef](https://github.com/Alwatr/weaver/commit/9e31bef1c4adfb719be46947082b18150dd84532)) by @njfamirm
- **app/11ty:** support 11.cjs file ([189fb97](https://github.com/Alwatr/weaver/commit/189fb979ea73ff5ce1c3d994f0f62e610dd2c485)) by @njfamirm
- **app/assets:** add meta images ([15069cc](https://github.com/Alwatr/weaver/commit/15069ccd70577885c50d9b34b483443dd3e8e374)) by @njfamirm
- **app/build:** add esbuild before ([aceefb2](https://github.com/Alwatr/weaver/commit/aceefb29a3802b0edbf09c63d6a81aa48d5d190c)) by @njfamirm
- **app/build:** add postcss before eleventy ([0cf82cb](https://github.com/Alwatr/weaver/commit/0cf82cb8af84d21a29108eb01bb26ef25cf0afdf)) by @njfamirm
- **app/build:** enhance build ([c69f2aa](https://github.com/Alwatr/weaver/commit/c69f2aa5da8639467a2711b7e0e47a833a2ba1e9)) by @njfamirm
- **app/build:** minify html ([85dca6e](https://github.com/Alwatr/weaver/commit/85dca6e493da2378065a5c44602d322a7af2fba4)) by @njfamirm
- **app/build:** move postcss into eleventy ([097f3b8](https://github.com/Alwatr/weaver/commit/097f3b8935241562c53ee8a81f0aa00c5ad6d0cc)) by @njfamirm
- **app/build:** watch mode ([0c2e4f1](https://github.com/Alwatr/weaver/commit/0c2e4f111de023459e299819b0cc8bc66ebb1cd1)) by @njfamirm
- **app/data:** add site ([e685cae](https://github.com/Alwatr/weaver/commit/e685cae5cf09a3619efa2a7b19567d1711c21d95)) by @njfamirm
- **app/global-util:** add i18n ([05c35b7](https://github.com/Alwatr/weaver/commit/05c35b7d15f79acf26ddd15f05c104358c7c099c)) by @njfamirm
- **app/home:** improve and use logo ([ea5e858](https://github.com/Alwatr/weaver/commit/ea5e858f81e98561c11d5a57bfc1aed1121c3ef5)) by @njfamirm
- **app/home:** improve and use logo ([f68e19e](https://github.com/Alwatr/weaver/commit/f68e19e1dc6f540eb259ac072141c741efa7c19d)) by @njfamirm
- **app/include:** prerender ([7eb4901](https://github.com/Alwatr/weaver/commit/7eb49011898415cc323a8017b55c3c25b3672ee3)) by @njfamirm
- **app/manifest:** add all icons ([c627376](https://github.com/Alwatr/weaver/commit/c62737607a8873306d798e98335abf087946acb6)) by @njfamirm
- **app/postcss:** log info like esbuild ([d4c9169](https://github.com/Alwatr/weaver/commit/d4c9169044af4b7df0c5c33b0b15a0942b60df39)) by @njfamirm
- **app/script:** add some useful for base ([37c8ddd](https://github.com/Alwatr/weaver/commit/37c8ddd36c78f33c906cc825cf3c144fad49691c)) by @njfamirm
- **app/script:** add some useful for base ([4ff4167](https://github.com/Alwatr/weaver/commit/4ff4167065f5ccb0e9b038df7954834f6000fe04)) by @njfamirm
- **app/shortcode:** add alwatr icon ([0653a92](https://github.com/Alwatr/weaver/commit/0653a92bb90de6cb1d4c31903de618f392314eff)) by @njfamirm
- **app/shortcode:** add alwatr icon ([b89ffc1](https://github.com/Alwatr/weaver/commit/b89ffc1f8ae81224dc04edfbecb9a0751de8d547)) by @njfamirm
- **app/wds:** disable clearTerminalOnReload ([cdd63c5](https://github.com/Alwatr/weaver/commit/cdd63c54dc6357c1e199628b8b74a539dec379b7)) by @njfamirm
- **app:** 11ty.js data ([e830dac](https://github.com/Alwatr/weaver/commit/e830dac10052661b7e466f46459945fc2351a929)) by @njfamirm
- **app:** add alpine ([062e3e5](https://github.com/Alwatr/weaver/commit/062e3e570ed7d10ef36251bfb584c5fe64d3690d)) by @njfamirm
- **app:** add vazirmatn font ([5f94e4e](https://github.com/Alwatr/weaver/commit/5f94e4e91c10e9bb95a3affb8d95998c349c5c02)) by @njfamirm
- **app:** base 11ty structure ([99fdd52](https://github.com/Alwatr/weaver/commit/99fdd52021cb4f62006a8c642543acf7207b8fca)) by @njfamirm
- **app:** build script ([ab2d1fa](https://github.com/Alwatr/weaver/commit/ab2d1fa8728a95b717c80d8fe36f9ea5984fbc0c)) by @njfamirm
- **app:** build using nano-build ([3e1c7b1](https://github.com/Alwatr/weaver/commit/3e1c7b13f44a3933d8e9d11fdf8bde95379bc583)) by @njfamirm
- **app:** color palette ([2f27c31](https://github.com/Alwatr/weaver/commit/2f27c31772dd5bd8480140855d879066dfe111e8)) by @njfamirm
- **app:** copy fonts from packages ([265ee2b](https://github.com/Alwatr/weaver/commit/265ee2b42579764e869a53b92477640118c86bf5)) by @njfamirm
- **app:** disable minification on deployment ([ebb00c5](https://github.com/Alwatr/weaver/commit/ebb00c565be01c446546eb4679fe2c66bf257cdf)) by @njfamirm
- **app:** dockerfile ([19657a4](https://github.com/Alwatr/weaver/commit/19657a4456dff1241481e4f03ed19d008e2f2301)) by @njfamirm
- **app:** dockerfile ([e94a33c](https://github.com/Alwatr/weaver/commit/e94a33c56dded0e3bc36d381a43071fa54e0d4e2)) by @njfamirm
- **app:** eleventy config ([5b5034a](https://github.com/Alwatr/weaver/commit/5b5034a5aaaf4de42b8a305aa36c190984dcd20a)) by @njfamirm
- **app:** git and env global data ([47cd400](https://github.com/Alwatr/weaver/commit/47cd400cd6a3e5c72d595feadfd04534519bc0ec)) by @njfamirm
- **app:** improve build system for esbuild ([42352b6](https://github.com/Alwatr/weaver/commit/42352b6881acf0c709e3e908050139130c03552a)) by @njfamirm
- **app:** improve home page ([55c9f21](https://github.com/Alwatr/weaver/commit/55c9f21aa9402dd38d344b9652abaa5038a0a972)) by @njfamirm
- **app:** make postcss config esm ([84ecb2a](https://github.com/Alwatr/weaver/commit/84ecb2aad654dfe56ac347f8c339f6ad9f993392)) by @njfamirm
- **app:** nunjucks prerender ([d2750a5](https://github.com/Alwatr/weaver/commit/d2750a579f3a37c5693c5dc0f50e4b588120dd7a)) by @njfamirm
- **app:** postcss ([cdfa364](https://github.com/Alwatr/weaver/commit/cdfa3643d72d2c8402f2b075f778212c92ce91e0)) by @njfamirm
- **app:** sample 11tydata file ([c9de5b9](https://github.com/Alwatr/weaver/commit/c9de5b93be68d96ba6c10b1ffc2cedd337980f81)) by @njfamirm
- **app:** serve using web dev server ([62bb145](https://github.com/Alwatr/weaver/commit/62bb145814c19586349e104926ded394055b8b7f)) by @njfamirm
- **app:** sitmep, rss, manifest ([79c2afc](https://github.com/Alwatr/weaver/commit/79c2afcf50438d8e7cff21d31275c24e46f9702b)) by @njfamirm
- **app:** sitmep, rss, manifest ([2827063](https://github.com/Alwatr/weaver/commit/282706343d9881c301e00da65ce7307acaae22a4)) by @njfamirm
- **app:** use base alwatr/style ([f10959f](https://github.com/Alwatr/weaver/commit/f10959f169f4a1e2e7d6b24842a231ee0b2109e4)) by @njfamirm
- base layout ([e423fd0](https://github.com/Alwatr/weaver/commit/e423fd093eb5df9662a4b2f729816244debae2f9)) by @njfamirm
- initial structure ([660709f](https://github.com/Alwatr/weaver/commit/660709f191a88940358292f83e90bd50fba24fba)) by @njfamirm
- maximum browser support ([75f3759](https://github.com/Alwatr/weaver/commit/75f3759a4ab0cf4d9edc4dc23f5cfa011fb57cb6)) by @AliMD
- update all configs ([5ebc1e6](https://github.com/Alwatr/weaver/commit/5ebc1e61d0175804f88a37bd4a897ba2b84fc118)) by @njfamirm
- Update Dockerfile build process ([0a0c545](https://github.com/Alwatr/weaver/commit/0a0c5458cdc8022ce53eef21ea397e29e4cf00ee)) by @AliMD
