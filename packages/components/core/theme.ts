//@ts-ignore
import { default as base } from 'native-base/lib/module/theme/base'

export const theme = {
  ...base,
  fontConfig: {
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
  },
  fonts: {
    heading: 'NunitoSans-Regular',
    body: 'NunitoSans-Regular',
    mono: 'NunitoSans-Light',
  },
  components: {
    Accordion: {
      // Can simply pass default props to change default behaviour of components.
      baseStyle: {
        rounded: 0,
        padding: 0,
        borderWidth: 0,
      },
    },
    // TODO: sort out shadow/margins
    AccordionSummary: {
      baseStyle: {
        bg: '#EFEBE9',
        // shadow:4,
        borderBottomThickness: 0,
        // marginBottom:"8px"
        borderTopColor: 'red.500',
        // _hover: {
        //   bg: mode('primary.200', 'primary.300')(props),
        // },
        color: '#553333',
        _expanded: {
          bg: '#EFEBE9',
          // borderBottomColor: mode('gray.300', 'gray.600')(props),
          _text: { color: '#553333' },
        },
        // _disabled: {
        //   bg: mode('gray.200', 'gray.700')(props),
        // },
      },
    },
  },
}

// console.log('THEME', theme)
