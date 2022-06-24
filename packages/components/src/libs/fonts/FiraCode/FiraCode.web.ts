import FiraCodeBold from '../../../assets/fonts/FiraCode/FiraCode-Bold.ttf'
import FiraCodeLight from '../../../assets/fonts/FiraCode/FiraCode-Light.ttf'
import FiraCodeMedium from '../../../assets/fonts/FiraCode/FiraCode-Medium.ttf'
import FiraCodeRegular from '../../../assets/fonts/FiraCode/FiraCode-Regular.ttf'
import FiraCodeSemiBold from '../../../assets/fonts/FiraCode/FiraCode-SemiBold.ttf'

import { createWebFont } from '../../vector-icons/helpers/index.web'

const obj = {
  'FiraCode-Bold': FiraCodeBold,
  'FiraCode-Light': FiraCodeLight,
  'FiraCode-Medium': FiraCodeMedium,
  'FiraCode-Regular': FiraCodeRegular,
  'FiraCode-SemiBold': FiraCodeSemiBold,
}
Object.keys(obj).forEach((font) => {
  const { injectStyleTag } = createWebFont(font, null, obj[font])

  injectStyleTag()
})
