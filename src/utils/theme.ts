export const Tokens = {
  space: {
    xxsm: 2,
    xsm: 4,
    sm: 8,
    reg: 12,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 32,
    xxxl: 48,
  },
  colors: {
    primary: '#746A64',
    secondary: '#212121',
    tertiary: '##DEDEDE',
    black: '#000000',
    white: '#FFFFFF',
    body_text: '#757575',
    grey: '#FAFAFA',
  },
  radius: {
    $xxsm: 2,
    $xsm: 4,
    $sm: 8,
    $reg: 12,
  },
  font: {
    reg: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
} as const;

export type ColorTokens = keyof typeof Tokens.colors;
export type SpaceTokens = keyof typeof Tokens.space;
export type RadiusTokens = keyof typeof Tokens.radius;
export type FontTokens = keyof typeof Tokens.font;
