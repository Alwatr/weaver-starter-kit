const {env} = require('process');

module.exports = {
  siteUrl: env.siteUrl ?? '',
};
