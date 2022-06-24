import MaterialCommunityIconsOriginal from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import MaterialIconFontURL from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf'

import { createWebFont } from '../../helpers/index.web'

const { Component, injectStyleTag } = createWebFont(
  'MaterialCommunityIcons',
  MaterialCommunityIconsOriginal,
  MaterialIconFontURL,
)

export { Component as MaterialCommunityIcons }

injectStyleTag()
