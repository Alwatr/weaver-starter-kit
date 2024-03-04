const {mkdir, cp} = require('fs/promises');
const {dirname, join} = require('path');
const {logger} = require('./logger.cjs');

async function copyFont(fontName, outDir) {
  logger.logMethod?.('copyFont')
  await mkdir(outDir, {recursive: true});

  let fontPath = require.resolve('@alwatr/font');
  fontPath = dirname(fontPath);
  fontPath = join(fontPath, fontName);
  logger.logProperty?.('fontPath', fontPath)

  await cp(fontPath, outDir, {recursive: true, preserveTimestamps: true, force: true});
}

module.exports = {copyFont};
