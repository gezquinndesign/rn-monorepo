import { transparentize } from 'native-base/lib/module/theme/tools/colors'
import { theme as myTheme } from '../../core/theme.ts'
import { displayName, url } from '../../app.json'

export const base = {
  base: 'light',

  colorPrimary: myTheme.colors.primary[600],
  colorSecondary: myTheme.colors.primary[600],

  // UI
  appBg: myTheme.colors.coolGray[50],
  appContentBg: myTheme.colors.white,
  appBorderColor: myTheme.colors.text[300],
  appBorderRadius: myTheme.radii.sm,

  // Typography
  fontBase: myTheme.fonts.body,
  fontCode: myTheme.fonts.mono,

  // Text colors
  textColor: myTheme.colors.text[900],
  textInverseColor: myTheme.colors.dark[900],
  textMutedColor: myTheme.colors.text[500],

  // Toolbar default and active colors
  barTextColor: myTheme.colors.text[900],
  barSelectedColor: myTheme.colors.primary[600],
  barBg: myTheme.colors.white,

  // Form colors
  inputBg: transparentize(myTheme.colors.primary[600], 0.1)(),
  inputBorder: myTheme.colors.text[300],
  inputTextColor: myTheme.colors.text[900],
  inputBorderRadius: myTheme.radii.sm,

  // Brand
  brandTitle: (displayName || '') + (displayName && ' ') + 'Design System',
  brandUrl: url,
  brandImage: '',

  gridCellSize: myTheme.radii.sm,
}
