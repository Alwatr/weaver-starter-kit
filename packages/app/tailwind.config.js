import {tailwindConfig} from '@alwatr/style';

/**
 * @type {import('tailwindcss').Config}
 */
export default {
  ...tailwindConfig,
  content: ['dist/**/*.html'],
  safelist: ['overflow-hidden'],
};
