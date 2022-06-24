import ZocialOriginal from 'react-native-vector-icons/dist/Zocial'
import ZocialFontURL from 'react-native-vector-icons/Fonts/Zocial.ttf'

import { createWebFont } from '../../helpers/index.web'

const { Component, injectStyleTag } = createWebFont(
  'Zocial',
  ZocialOriginal,
  ZocialFontURL,
)

export { Component as Zocial }

injectStyleTag()
