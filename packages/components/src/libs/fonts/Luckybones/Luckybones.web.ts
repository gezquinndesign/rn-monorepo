import LuckybonesBold from '../../../assets/fonts/Luckybones/Luckybones-Bold.ttf'

import { createWebFont } from '../../vector-icons/helpers/index.web'

const obj = {
  'Luckybones-Bold': LuckybonesBold,
}
Object.keys(obj).forEach((font) => {
  const { injectStyleTag } = createWebFont(font, null, obj[font])

  injectStyleTag()
})
