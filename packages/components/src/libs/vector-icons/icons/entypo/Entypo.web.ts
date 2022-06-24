import EntypoOriginal from 'react-native-vector-icons/dist/Entypo'
import EntypoFontURL from 'react-native-vector-icons/Fonts/Entypo.ttf'

import { createWebFont } from '../../helpers/index.web'

const { Component, injectStyleTag } = createWebFont(
  'Entypo',
  EntypoOriginal,
  EntypoFontURL,
)

export { Component as Entypo }

injectStyleTag()
