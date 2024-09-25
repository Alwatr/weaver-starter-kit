// const htmlToAbsoluteUrls = require("@11ty/eleventy/src/Filters/Url.js").htmlToAbsoluteUrls;

exports.data = {
  permalink: "/feed.xml",
  eleventyExcludeFromCollections: true,
  layout: null,
};

exports.render = function(data) {
  let feed = '<?xml version="1.0" encoding="utf-8"?>\n' +
    '<feed xmlns="http://www.w3.org/2005/Atom" xml:base="' + data.env.siteUrl + '">\n' +
    '\t<title>' + data.site.title + '</title>\n' +
    '\t<subtitle>' + data.site.description + '</subtitle>\n' +
    '\t<link href="' + data.env.siteUrl + data.permalink + '" rel="self"/>\n' +
    '\t<link href="' + data.env.siteUrl + '"/>\n' +
    '\t<updated>' + data.collections.post[data.collections.post.length - 1].date.toISOString() + '</updated>\n' +
    '\t<id>' + data.env.siteUrl + '</id>\n' +
    '\t<author>\n' +
    '\t\t<name>' + data.site.author.name + '</name>\n' +
    '\t\t<email>' + data.site.author.email + '</email>\n' +
    '\t</author>\n';

  for (const post of data.collections.post.reverse()) {
    const absolutePostUrl = data.env.siteUrl + post.url;
    feed += '\t<entry>\n' +
      '\t\t<title>' + post.data.title + '</title>\n' +
      '\t\t<link href="' + absolutePostUrl + '" />\n' +
      '\t\t<updated>' + post.date.toISOString() + '</updated>\n' +
      '\t\t<id>' + absolutePostUrl + '</id>\n' +
      // '\t\t<content xml:lang="' + data.site.defaultLocale + '" type="html">' + htmlToAbsoluteUrls(post.templateContent, absolutePostUrl) + '</content>\n' +
      '\t</entry>\n';
  }

  feed += '</feed>\n';

  return feed;
};
