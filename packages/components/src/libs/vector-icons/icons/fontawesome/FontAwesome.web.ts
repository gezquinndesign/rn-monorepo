import FontAwesomeOriginal from 'react-native-vector-icons/dist/FontAwesome'
import FontAwesomeFontURL from 'react-native-vector-icons/Fonts/FontAwesome.ttf'

import { createWebFont } from '../../helpers/index.web'

const { Component, injectStyleTag } = createWebFont(
  'FontAwesome',
  FontAwesomeOriginal,
  FontAwesomeFontURL,
)

export { Component as FontAwesome }

injectStyleTag()
