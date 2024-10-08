import {
  animationTheme,
  screenTheme,
  typographyTheme,
  zIndexTheme,
  // ---
  materialColorPlugin,
  materialColorPalletteNames,
  safeAreaPlugin,
  directionPlugin,
  elevationPlugin,
  stateLayerPlugin,
  translucentPlugin,
} from '@alwatr/windstyle';

import materialTheme from './src/css/material-theme.json' assert { type: 'json' };

// console.log('materialTheme', materialTheme);

 /** @type {import('@alwatr/type-helper/types').DictionaryReq} */
const materialColorTheme = {};
for (const colorName of materialColorPalletteNames) {
  materialColorTheme[colorName] = {
    DEFAULT: `rgba(var(--sys-color-${colorName}), <alpha-value>)`,
    light: materialTheme.schemes.light[colorName],
    dark: materialTheme.schemes.dark[colorName],
  }
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['dist/**/*.html', 'dist/es/**/*.js'],
  theme: {
    extend: {
      animation: animationTheme.animation,
      keyframes: animationTheme.keyframes,
      screens: screenTheme.screens,
      zIndex: zIndexTheme.zIndex,
      fontFamily: typographyTheme.fontFamily,
      fontSize: typographyTheme.fontSize,
      colors: materialColorTheme
    },
  },
  plugins: [
    materialColorPlugin,
    safeAreaPlugin,
    directionPlugin,
    elevationPlugin,
    stateLayerPlugin,
    translucentPlugin,
  ],
};
