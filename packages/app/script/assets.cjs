const {mkdir, cp} = require('fs/promises');

async function copyFont(fontName, outDir) {
  await mkdir(outDir, {recursive: true});

  let path = require.resolve('@alwatr/font');
  path = path.slice(0, path.lastIndexOf('/'));
  path += '/' + fontName;
  console.log(path);

  await cp(path, outDir, {recursive: true, preserveTimestamps: true, force: true});
}

module.exports = {copyFont};
