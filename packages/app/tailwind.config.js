import {
  animationTheme,
  screenTheme,
  typographyTheme,
  zIndexTheme,
  colorTheme,
  // ---
  colorPlugin,
  safeAreaPlugin,
  directionPlugin,
  elevationPlugin,
  stateLayerPlugin,
  translucentPlugin,
} from '@alwatr/windstyle';

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
      colors: colorTheme.colors,
    },
  },
  plugins: [
    colorPlugin,
    safeAreaPlugin,
    directionPlugin,
    elevationPlugin,
    stateLayerPlugin,
    translucentPlugin,
  ],
};
