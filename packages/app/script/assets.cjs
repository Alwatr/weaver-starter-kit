const {mkdir, cp} = require('fs/promises');

async function copyFont(fontName, outDir) {
  console.log('copyFont(%s)', fontName);
  await mkdir(outDir, {recursive: true});

  let path = require.resolve('@alwatr/font');
  path = path.slice(0, path.lastIndexOf('/'));
  path += '/' + fontName;
  console.log('fontPath: %s', path);

  await cp(path, outDir, {recursive: true, preserveTimestamps: true, force: true});
}

module.exports = {copyFont};
