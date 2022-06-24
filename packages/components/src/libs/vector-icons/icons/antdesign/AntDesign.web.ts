import AntDesignOriginal from 'react-native-vector-icons/dist/AntDesign'
import AntDesignFontURL from 'react-native-vector-icons/Fonts/AntDesign.ttf'

import { createWebFont } from '../../helpers/index.web'

const { Component, injectStyleTag } = createWebFont(
  'AntDesign',
  AntDesignOriginal,
  AntDesignFontURL,
)

export { Component as AntDesign }

injectStyleTag()
