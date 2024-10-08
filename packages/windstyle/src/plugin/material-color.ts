import plugin from 'tailwindcss/plugin.js';

export const materialColorPalletteNames = [
  'primary',
  'surfaceTint',
  'onPrimary',
  'primaryContainer',
  'onPrimaryContainer',
  'secondary',
  'onSecondary',
  'secondaryContainer',
  'onSecondaryContainer',
  'tertiary',
  'onTertiary',
  'tertiaryContainer',
  'onTertiaryContainer',
  'error',
  'onError',
  'errorContainer',
  'onErrorContainer',
  'background',
  'onBackground',
  'surface',
  'onSurface',
  'surfaceVariant',
  'onSurfaceVariant',
  'outline',
  'outlineVariant',
  'shadow',
  'scrim',
  'inverseSurface',
  'inverseOnSurface',
  'inversePrimary',
  'primaryFixed',
  'onPrimaryFixed',
  'primaryFixedDim',
  'onPrimaryFixedVariant',
  'secondaryFixed',
  'onSecondaryFixed',
  'secondaryFixedDim',
  'onSecondaryFixedVariant',
  'tertiaryFixed',
  'onTertiaryFixed',
  'tertiaryFixedDim',
  'onTertiaryFixedVariant',
  'surfaceDim',
  'surfaceBright',
  'surfaceContainerLowest',
  'surfaceContainerLow',
  'surfaceContainer',
  'surfaceContainerHigh',
  'surfaceContainerHighest',
] as const;

const mediaRule = '@media (prefers-color-scheme: dark)' as const;

export const materialColorPlugin = plugin(({addUtilities, theme}) => {
  const utilityColors_ = {
    '.color-scheme-light': {} as DictionaryReq<string>,
    '.color-scheme-dark': {} as DictionaryReq<string>,
    '.color-scheme-auto': {
    } as DictionaryReq<string | DictionaryReq<string>>,
  } as const;


  const mediaRuleColors = {} as DictionaryReq<string>;
  for (const colorName of materialColorPalletteNames) {
    const colorVarName = `--sys-color-${colorName}`;
    utilityColors_['.color-scheme-light'][colorVarName] = convertHexColorToRGBA(theme('colors.' + colorName + '.light'));
    utilityColors_['.color-scheme-dark'][colorVarName] = convertHexColorToRGBA(theme('colors.' + colorName + '.dark'));
    utilityColors_['.color-scheme-auto'][colorVarName] = convertHexColorToRGBA(theme('colors.' + colorName + '.light'));
    mediaRuleColors[colorVarName] = convertHexColorToRGBA(theme('colors.' + colorName + '.dark'));
  }
  utilityColors_['.color-scheme-auto'][mediaRule] = mediaRuleColors; // must be append after default colors! @TODO: check old browsers!

  addUtilities(utilityColors_);
});

export function convertHexColorToRGBA(hexColor: string) {
  const hex = hexColor.replace('#', '').trim();
  return [
    parseInt(hex.substring(0, 2), 16),
    parseInt(hex.substring(2, 4), 16),
    parseInt(hex.substring(4, 6), 16),
  ].join(',');
}
