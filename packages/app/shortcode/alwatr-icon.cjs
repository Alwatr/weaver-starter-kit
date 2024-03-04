const {readFile} = require('fs/promises');
const {join} = require('path');

const cache = {};

/**
 * Load an icon from the icon set and return it's svg as a string.
 *
 * @param {string} icon icon name
 * @param {string} customClass custom class added to svg span container
 * @returns {Promise<string>} svg content inside of a span
 */
async function iconLoader(icon, customClass = '') {
  logger.logMethodArgs?.('iconLoader', {icon, customClass});
  if (icon.indexOf('/') === -1) {
    icon = 'material/' + icon;
  }

  if (icon.indexOf(':') === -1) {
    icon = icon + ':main';
  }

  if (cache.hasOwnProperty(icon) === false) {
    const [iconPack, iconExtra] = icon.split('/');
    const [iconName, iconType] = iconExtra.replace(/\_/, '-').split(':');

    try {
      const iconPath = join(`@alwatr/icon-set-${iconPack}`, 'svg', `${iconType}`, `${iconName}.svg`);
      const resolvedPath = require.resolve(iconPath);
      cache[icon] = await readFile(resolvedPath, 'utf8');
    } catch {
      if (process.env.NODE_ENV === 'production') {
        throw new Error(`alwatr-icon: icon ${icon} not found`);
      }

      console.log('iconLoader', 'icon_not_found', icon);
      cache[icon] = 'N!';
    }
  }

  return `<span class="alwatr-icon ${customClass}">${cache[icon]}</span>`;
}

module.exports = {iconLoader};
