const eleventyFetch = require('@11ty/eleventy-fetch');

module.exports = async function () {
  try {
    let json = await eleventyFetch('https://api.github.com/repos/Alwatr/pmpa', {duration: '1d', type: 'json'});

    return {
      stargazers: json.stargazers_count,
    };
  }
  catch (e) {
    console.log('Failed getting GitHub stargazers count, returning 0');
    return {
      stargazers: 0,
    };
  }
};
