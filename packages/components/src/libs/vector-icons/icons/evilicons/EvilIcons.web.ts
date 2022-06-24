import EvilIconsOriginal from 'react-native-vector-icons/dist/EvilIcons'
import EvilIconsFontURL from 'react-native-vector-icons/Fonts/EvilIcons.ttf'

import { createWebFont } from '../../helpers/index.web'

const { Component, injectStyleTag } = createWebFont(
  'EvilIcons',
  EvilIconsOriginal,
  EvilIconsFontURL,
)

export { Component as EvilIcons }

injectStyleTag()
