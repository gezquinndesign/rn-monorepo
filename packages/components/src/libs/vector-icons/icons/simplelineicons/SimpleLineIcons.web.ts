import SimpleLineIconsOriginal from 'react-native-vector-icons/dist/SimpleLineIcons'
import SimpleLineIconsFontURL from 'react-native-vector-icons/Fonts/SimpleLineIcons.ttf'

import { createWebFont } from '../../helpers/index.web'

const { Component, injectStyleTag } = createWebFont(
  'SimpleLineIcons',
  SimpleLineIconsOriginal,
  SimpleLineIconsFontURL,
)

export { Component as SimpleLineIcons }

injectStyleTag()
