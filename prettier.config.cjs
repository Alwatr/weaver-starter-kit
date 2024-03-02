const liquid = require.resolve('@shopify/prettier-plugin-liquid');
const alwatrConfig = require('@alwatr/prettier-config');

/** @type {import("prettier").Config} */
const config = {
  ...alwatrConfig,
  plugins: [
    ...(alwatrConfig.plugins ?? []),
    liquid
  ],
};

module.exports = config;
