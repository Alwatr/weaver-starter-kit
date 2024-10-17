import plugin from 'tailwindcss/plugin.js';
const flattenColorPalette = (colors: DictionaryOpt): Record<string, string> =>
  Object.assign(
    {},
    ...Object.entries(colors ?? {}).flatMap(([color, values]) =>
      typeof values === 'object'
        ? Object.entries(flattenColorPalette(values as DictionaryOpt)).map(([number, hex]) => ({
          [color + (number === 'DEFAULT' ? '' : `-${number}`)]: hex,
        }))
        : [{[color]: values}],
    ),
  );

const stateOpacity = {
  hover: 0.08,
  focus: 0.12,
  pressed: 0.12,
  dragged: 0.16,
} as const;

export const stateLayerPlugin = plugin(({matchUtilities, theme}) => {
  matchUtilities(
    {
      state: (value) => {
        if (typeof value !== 'function') return null;
        const makeColor = value as unknown as (options: {opacityValue: number}) => string;
        const colors = {
          base: makeColor({opacityValue: 1}),
          hover: makeColor({opacityValue: stateOpacity.hover}),
          focus: makeColor({opacityValue: stateOpacity.focus}),
          pressed: makeColor({opacityValue: stateOpacity.pressed}),
        };
        return {
          color: colors.base,
          '&:hover': {
            backgroundImage: `linear-gradient(${colors.hover}, ${colors.hover})`,
          },
          '&:active': {
            backgroundImage: `linear-gradient(${colors.pressed}, ${colors.pressed})`,
          },
          '&:focus:not(:hover), &:focus-within:not(:hover)': {
            backgroundImage: `linear-gradient(${colors.focus}, ${colors.focus})`,
          },
        };
      },
      stateHover: (value) => {
        if (typeof value !== 'function') return null;
        const makeColor = value as unknown as (options: {opacityValue: number}) => string;
        const color = makeColor({opacityValue: stateOpacity.hover});
        return {
          backgroundImage: `linear-gradient(${color}, ${color})`,
        };
      },
      stateActive: (value) => {
        if (typeof value !== 'function') return null;
        const makeColor = value as unknown as (options: {opacityValue: number}) => string;
        const color = makeColor({opacityValue: stateOpacity.pressed});
        return {
          backgroundImage: `linear-gradient(${color}, ${color})`,
        };
      },
    },
    {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      values: (({DEFAULT: _, ...colors}) => colors)(flattenColorPalette(theme('colors'))),
      type: 'color',
    },
  );
});
