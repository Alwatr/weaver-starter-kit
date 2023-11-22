/**
 * 11ty configuration.
 * @param {import("@11ty/eleventy").UserConfig} eleventyConfig
 * @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    assets: '/',
  });

  eleventyConfig.setServerOptions({
    liveReload: true,
    port: 8080,
    showAllHosts: true,

    /**
     * Whether DOM diffing updates are applied where possible instead of page reloads
     */
    domDiff: false,
  });

  eleventyConfig.addWatchTarget('./site/');
  eleventyConfig.addWatchTarget('./shortcode/');

  return {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    templateFormats: ['njk', '11ty.js', 'md'],
    dir: {
      input: 'site',
      output: 'dist',
      includes: '_includes',
      data: '_data',
      layouts: '_layouts',
    },
  };
};
