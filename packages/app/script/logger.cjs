const {definePackage} = require('@alwatr/logger');

const logger = definePackage('@alwatr/pmpa-app-build', '1.x', true);

const devMode = process.env.NODE_ENV !== 'production';
logger.logProperty?.('devMode', devMode);

module.exports = {logger, devMode}
