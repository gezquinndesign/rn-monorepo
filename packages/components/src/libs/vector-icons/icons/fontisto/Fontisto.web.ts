import FontistoOriginal from 'react-native-vector-icons/dist/Fontisto'
import FontistoFontURL from 'react-native-vector-icons/Fonts/Fontisto.ttf'

import { createWebFont } from '../../helpers/index.web'

const { Component, injectStyleTag } = createWebFont(
  'Fontisto',
  FontistoOriginal,
  FontistoFontURL,
)

export { Component as Fontisto }

injectStyleTag()
