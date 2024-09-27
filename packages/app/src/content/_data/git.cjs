const {execSync} = require('child_process');
function getLastCommitHash() {
  return execSync('git rev-parse --short HEAD').toString().trim();
}

module.exports = {shortSha: getLastCommitHash()};
