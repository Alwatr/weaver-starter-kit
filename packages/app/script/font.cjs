const {mkdir, cp} = require('fs/promises');
const {dirname, join} = require('path');

/**
 * Copy font to output directory
 * @async
 * @param {string} fontName
 * @param {string} outDir
 */
async function copyFont(fontName, outDir) {
  console.log('copyFont(%s)', fontName);
  await mkdir(outDir, {recursive: true});

  let fontPath = require.resolve('@alwatr/font');
  fontPath = dirname(fontPath);
  fontPath = join(fontPath, fontName);
  console.log('fontPath: %s', fontPath);

  await cp(fontPath, outDir, {recursive: true, preserveTimestamps: true, force: true});
}

module.exports = {copyFont};
