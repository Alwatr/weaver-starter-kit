exports.data = {
  permalink: '/sitemap.xml',
  eleventyExcludeFromCollections: true,
  layout: null,
};

exports.render = function (data) {
  let sitemap = '<?xml version="1.0" encoding="utf-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const page of data.collections.all) {
    if (page.data.sitemap !== false) {
      sitemap +=
        '\t<url>\n' +
        `\t\t<loc>${data.env.siteUrl}${page.url}</loc>\n` +
        `\t\t<lastmod>${page.date.toISOString()}</lastmod>\n` +
        '\t</url>\n';
    }
  }

  sitemap += '</urlset>\n';

  return sitemap;
};
