const {env} = require('process');

module.exports = {
  siteUrl: env.siteUrl ?? '',
  noIndex: env.noIndex === '1',
  production: env.NODE_ENV === 'production',
};
