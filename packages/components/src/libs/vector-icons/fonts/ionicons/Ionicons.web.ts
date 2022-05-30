import IoniconsOriginal from 'react-native-vector-icons/dist/Ionicons'
import IoniconFontURL from 'react-native-vector-icons/Fonts/Ionicons.ttf'

import { createWebFont } from '../../helpers/index.web'

const { Component, injectStyleTag } = createWebFont(
  'Ionicons',
  IoniconsOriginal,
  IoniconFontURL,
)

export { Component as Ionicons }

injectStyleTag()
