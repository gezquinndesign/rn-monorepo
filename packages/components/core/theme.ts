//@ts-ignore
import { default as base } from 'native-base/lib/module/theme/base'

export const theme = {
  ...base,
  fontConfig: {
    Luckybones: {
      700: {
        normal: 'Luckybones-Bold',
      },
    },
    NunitoSans: {
      200: {
        normal: 'NunitoSans-ExtraLight',
        italic: 'NunitoSans-ExtraLightItalic',
      },
      300: {
        normal: 'NunitoSans-Light',
        italic: 'NunitoSans-LightItalic',
      },
      400: {
        normal: 'NunitoSans-Regular',
        italic: 'NunitoSans-Italic',
      },
      600: {
        normal: 'NunitoSans-SemiBold',
        italic: 'NunitoSans-SemiBoldItalic',
      },
      700: {
        normal: 'NunitoSans-Bold',
        italic: 'NunitoSans-BoldItalic',
      },
      800: {
        normal: 'NunitoSans-ExtraBold',
        italic: 'NunitoSans-ExtraBoldItalic',
      },
      900: {
        normal: 'NunitoSans-Black',
        italic: 'NunitoSans-BlackItalic',
      },
    },
    FiraCode: {
      300: {
        normal: 'FiraCode-Light',
      },
      400: {
        normal: 'FiraCode-Regular',
      },
      500: {
        normal: 'FiraCode-Medium',
      },
      600: {
        normal: 'FiraCode-SemiBold',
      },
      700: {
        normal: 'FiraCode-Bold',
      },
    },
  },
  fonts: {
    heading: 'Luckybones-Bold',
    body: 'NunitoSans-Regular',
    mono: 'FiraCode',
  },
  lineHeights: {
    '2xs': '2.4em',
    xs: '2em',
    sm: '1.7em',
    md: '1.5em',
    lg: '1.25em',
    xl: '1.25em',
    '2xl': '1.25em',
    '3xl': '1.1em',
    '4xl': '1.25em',
    '5xl': '1.25em',
    '6xl': '1.25em',
    '7xl': '1.25em',
  },
  // fontSizes: {
  //   '2xs': '1rem',
  //   xs: '1.2rem',
  //   sm: '1.4rem',
  //   md: '1.6rem',
  //   lg: '2rem',
  //   xl: '2.8rem',
  //   '2xl': '3.6rem',
  //   '3xl': '4.4rem',
  //   '4xl': '6rem',
  //   '5xl': '7.2rem',
  //   '6xl': '9.6rem',
  //   '7xl': '12.8rem',
  // },
  space: {
    0: 0,
    0.5: 2,
    1: 4,
    1.5: 6,
    2: 8,
    2.5: 10,
    3: 12,
    3.5: 14,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
    12: 48,
    16: 64,
    20: 80,
    24: 96,
    32: 128,
    40: 160,
    48: 192,
    56: 224,
    64: 256,
    72: 288,
    80: 320,
    96: 384,
  },
}

// console.log('THEME', theme)
