import TemplateConfig from '@11ty/eleventy/src/TemplateConfig.js';
import urlFilter from '@11ty/eleventy/src/Filters/Url.js';
import slugifyFilter from '@11ty/eleventy/src/Filters/Slugify.js';
import {minifyHtml} from './minify-html.mjs';
import {postcssBuild} from './postcss.mjs';
import {dateString, timeString, trim} from './util.mjs';
import directoryOutputPlugin from '@11ty/eleventy-plugin-directory-output';
import {alwatrIcon} from './alwatr-icon.cjs';
import EleventyRenderPlugin from '@11ty/eleventy/src/Plugins/RenderPlugin.js';
import {generateServiceWorker} from './workbox.mjs';
import {logger} from './logger.mjs';

// https://github.com/11ty/eleventy/blob/v2.x/src/defaultConfig.js
/**
 * 11ty configuration.
 * @param {import("@11ty/eleventy").UserConfig} config
 * @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */
function eleventyConfig_(config) {
  let templateConfig = this;

  // config.addPassthroughCopy({
  //   asset: '/', // copy all content/asset/* folder to root of dist.
  //   'asset/img/meta/favicon.ico': '/favicon.ico',
  // }, {
  //   debug: true
  // });

  config.setServerOptions({
    liveReload: true,
    port: 8080,
    showAllHosts: true,

    /**
     * Whether DOM diffing updates are applied where possible instead of page reloads
     */
    domDiff: false,
  });

  config.addWatchTarget('./src/css/');
  config.addWatchTarget('./src/ts/');
  logger.logProperty?.('additionalWatchTargets', config.additionalWatchTargets);

  // config.watchIgnores?.add('script');

  // config.addFilter("slug", slugFilter);
  config.addFilter('slugify', slugifyFilter);

  // Add pathPrefix manually to a URL
  config.addFilter('url', function addPathPrefix(url, pathPrefixOverride) {
    let pathPrefix;
    if (pathPrefixOverride && typeof pathPrefixOverride === 'string') {
      pathPrefix = pathPrefixOverride;
    } else {
      pathPrefix = templateConfig.getPathPrefix();
    }

    return urlFilter.call(this, url, pathPrefix);
  });

  config.addFilter('log', (input, ...messages) => {
    console.log(input, ...messages);
  });

  // config.addFilter("serverlessUrl", serverlessUrlFilter);

  // config.addFilter("getCollectionItemIndex", function (collection, pageOverride) {
  //   return getCollectionItemIndex.call(this, collection, pageOverride);
  // });

  // config.addFilter("getCollectionItem", function (collection, pageOverride, langCode) {
  //   return getLocaleCollectionItem.call(this, config, collection, pageOverride, langCode, 0);
  // });
  // config.addFilter("getPreviousCollectionItem", function (collection, pageOverride, langCode) {
  //   return getLocaleCollectionItem.call(this, config, collection, pageOverride, langCode, -1);
  // });
  // config.addFilter("getNextCollectionItem", function (collection, pageOverride, langCode) {
  //   return getLocaleCollectionItem.call(this, config, collection, pageOverride, langCode, 1);
  // });

  config.addFilter('dateString', dateString);
  config.addFilter('timeString', timeString);
  config.addFilter('trim', trim);

  config.addAsyncShortcode('alwatrIcon', alwatrIcon);

  config.addPlugin(EleventyRenderPlugin);
  config.addPlugin(directoryOutputPlugin, {
    columns: {
      filesize: true,
      benchmark: true,
    },
    warningFileSize: 400_000,
  });

  config.addTransform('minifyHtml', minifyHtml);
  config.addTransform('trim', trim);

  config.on('eleventy.after', postcssBuild);
  config.on('eleventy.after', generateServiceWorker);

  config.addExtension('template.cjs', {key: '11ty.js'});
  config.setDataFileSuffixes(['.data']);
  config.setDataFileBaseName('index');

  // return root config.
  return {
    templateFormats: [
      // "liquid",
      // "ejs",
      // "hbs",
      // "mustache",
      // "haml",
      // "pug",
      // "html",
      'md',
      'njk',
      '11ty.js',
    ],

    // if your site lives in a subdirectory, change this
    pathPrefix: '/',
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    htmlOutputSuffix: '-o',

    handlebarsHelpers: {},
    nunjucksFilters: {},

    // Renamed from `jsDataFileSuffix` in 2.0 (and swapped to an Array)
    // If you remove "" we won’t look for dir/dir.json or file.json
    dataFileSuffixes: ['.data'],

    // "index" will look for `directory/index.*` directory data files instead of `directory/directory.*`
    dataFileDirBaseNameOverride: true,

    keys: {
      package: 'pkg',
      layout: 'layout',
      permalink: 'permalink',
      permalinkRoot: 'permalinkBypassOutputDir',
      engineOverride: 'templateEngineOverride',
      computed: 'eleventyComputed',
    },

    dir: {
      input: 'src/site/content',
      output: 'dist',
      includes: '../include',
      data: '../data',
      layouts: '../layout',
    },
  };
}

export const eleventyConfig = new TemplateConfig(eleventyConfig_);
