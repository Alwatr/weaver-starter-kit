const {env} = require('process');
const {execSync} = require('child_process');

function getLastCommitHash() {
  return execSync('git rev-parse --short HEAD').toString().trim();
}

module.exports = {
  siteUrl: env.siteUrl ?? '',

  siteName: 'Weaver WebSite',

  theme: {
    light: '#e2eaf8',
    dark: '#084073',
    splashBackground: '#0b0c16', // used in manifest
  },
  orientation: 'portrait', // used in manifest
  defaultLocale: 'fa-IR', // used in manifest

  googleAnalyticsKey: '',

  currentChangeHash: getLastCommitHash(),

  twitter: {
    site: '@alidotmd',
    creator: '@alidotmd',
  },
};
