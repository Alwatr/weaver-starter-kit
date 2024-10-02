function prerenderTemplate({collections}) {
  const prerenderUrls = collections.filter((page) => page.data.ignorePrerendering !== true).map((page) => page.url);
  const prerenderScript = {
    prerender: [
      {
        source: 'list',
        urls: prerenderUrls,
      },
    ],
  };
  return `<script type="speculationrules">${JSON.stringify(prerenderScript)}</script>`;
}

module.exports = prerenderTemplate;
