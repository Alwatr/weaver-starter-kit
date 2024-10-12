class Sitemap {
  data() {
    return {
      permalink:' /error-404.html',
    };
  }

  render ({collections, config}) {
    // return html``;
    let xml = '<?xml version="1.0" encoding="utf-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    for (const page of collections.all) {
      if (page.data.sitemap !== false) {
        xml +=
          '\t<url>\n' +
          `\t\t<loc>${config.siteUrl}${page.url}</loc>\n` +
          `\t\t<lastmod>${page.date.toISOString()}</lastmod>\n` +
          '\t</url>\n';
      }
    }

    xml += '</urlset>\n';

    return xml;
  };
}

module.exports = Sitemap;
