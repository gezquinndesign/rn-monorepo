import FoundationOriginal from 'react-native-vector-icons/dist/Foundation'
import FoundationFontURL from 'react-native-vector-icons/Fonts/Foundation.ttf'

import { createWebFont } from '../../helpers/index.web'

const { Component, injectStyleTag } = createWebFont(
  'Foundation',
  FoundationOriginal,
  FoundationFontURL,
)

export { Component as Foundation }

injectStyleTag()
