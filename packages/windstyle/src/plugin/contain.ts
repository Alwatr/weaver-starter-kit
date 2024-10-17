import plugin from 'tailwindcss/plugin.js';

// Define the containPlugin using Tailwind CSS plugin
export const containPlugin = plugin(
  ({matchUtilities, theme}) => {
    // Match utilities for the 'contain' property
    matchUtilities(
      {
        contain: (value) => ({
          contain: value,
        }),
      },
      {values: theme('contain')},
    );
  },
  {
    theme: {
      contain: {
        none: 'none',
        strict: 'strict',
        size: 'size',
        inlineSize: 'inline-size',
        layout: 'layout',
        style: 'style',
        paint: 'paint',
        content: 'content',
      },
    },
  },
);
