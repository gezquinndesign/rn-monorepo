import FeatherOriginal from 'react-native-vector-icons/dist/Feather'
import FeatherFontURL from 'react-native-vector-icons/Fonts/Feather.ttf'

import { createWebFont } from '../../helpers/index.web'

const { Component, injectStyleTag } = createWebFont(
  'Feather',
  FeatherOriginal,
  FeatherFontURL,
)

export { Component as Feather }

injectStyleTag()
