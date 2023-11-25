import TemplateConfig from '@11ty/eleventy/src/TemplateConfig.js';
import {productionMode} from './logger.js';
import {esbuildBuild} from './esbuild.js';
import {minifyHtml} from './minify-html.js';
import {postcssBuild} from './postcss.js';

// https://github.com/11ty/eleventy/blob/v2.x/src/defaultConfig.js
/**
 * 11ty configuration.
 * @param {import("@11ty/eleventy").UserConfig} config
 * @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */
function _eleventyConfig(config) {
  // let templateConfig = this;

  // config.addFilter("slug", slugFilter);
  // config.addFilter("slugify", slugifyFilter);

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

  config.addPassthroughCopy({
    assets: '/',
  });

  config.setServerOptions({
    liveReload: true,
    port: 8080,
    showAllHosts: true,

    /**
     * Whether DOM diffing updates are applied where possible instead of page reloads
     */
    domDiff: false,
  });

  config.additionalWatchTargets = ['./site/', './shortcode/']

  if (productionMode === true) {
    config.addTransform('minifyHtml', minifyHtml);
  }

  config.on('eleventy.before', esbuildBuild);
  config.on('eleventy.after', postcssBuild);

  config.addExtension("11ty.cjs", {key: "11ty.js"});

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

    // Renamed from `jsDataFileSuffix` in 2.0 (and swapped to an Array)
    // If you remove "" we won’t look for dir/dir.json or file.json
    dataFileSuffixes: ['.11tydata', ''],

    // "index" will look for `directory/index.*` directory data files instead of `directory/directory.*`
    dataFileDirBaseNameOverride: false,

    keys: {
      package: 'pkg',
      layout: 'layout',
      permalink: 'permalink',
      permalinkRoot: 'permalinkBypassOutputDir',
      engineOverride: 'templateEngineOverride',
      computed: 'eleventyComputed',
    },

    dir: {
      input: 'site',
      output: 'dist',
      includes: '_include',
      data: '_data',
      layouts: '_layout',
    },
  };
}

export const eleventyConfig = new TemplateConfig(_eleventyConfig);
