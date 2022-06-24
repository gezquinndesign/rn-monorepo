import NunitoSansBlack from '../../../assets/fonts/NunitoSans/NunitoSans-Black.ttf'
import NunitoSansBlackItalic from '../../../assets/fonts/NunitoSans/NunitoSans-BlackItalic.ttf'
import NunitoSansBold from '../../../assets/fonts/NunitoSans/NunitoSans-Bold.ttf'
import NunitoSansBoldItalic from '../../../assets/fonts/NunitoSans/NunitoSans-BoldItalic.ttf'
import NunitoSansExtraBold from '../../../assets/fonts/NunitoSans/NunitoSans-ExtraBold.ttf'
import NunitoSansExtraBoldItalic from '../../../assets/fonts/NunitoSans/NunitoSans-ExtraBoldItalic.ttf'
import NunitoSansExtraLight from '../../../assets/fonts/NunitoSans/NunitoSans-ExtraLight.ttf'
import NunitoSansExtraLightItalic from '../../../assets/fonts/NunitoSans/NunitoSans-ExtraLightItalic.ttf'
import NunitoSansItalic from '../../../assets/fonts/NunitoSans/NunitoSans-Italic.ttf'
import NunitoSansLight from '../../../assets/fonts/NunitoSans/NunitoSans-Light.ttf'
import NunitoSansLightItalic from '../../../assets/fonts/NunitoSans/NunitoSans-LightItalic.ttf'
import NunitoSansRegular from '../../../assets/fonts/NunitoSans/NunitoSans-Regular.ttf'
import NunitoSansSemiBold from '../../../assets/fonts/NunitoSans/NunitoSans-SemiBold.ttf'
import NunitoSansSemiBoldItalic from '../../../assets/fonts/NunitoSans/NunitoSans-SemiBoldItalic.ttf'

import { createWebFont } from '../../vector-icons/helpers/index.web'

const obj = {
  'NunitoSans-Black': NunitoSansBlack,
  'NunitoSans-BlackItalic': NunitoSansBlackItalic,
  'NunitoSans-Bold': NunitoSansBold,
  'NunitoSans-BoldItalic': NunitoSansBoldItalic,
  'NunitoSans-ExtraBold': NunitoSansExtraBold,
  'NunitoSans-ExtraBoldItalic': NunitoSansExtraBoldItalic,
  'NunitoSans-ExtraLight': NunitoSansExtraLight,
  'NunitoSans-ExtraLightItalic': NunitoSansExtraLightItalic,
  'NunitoSans-Italic': NunitoSansItalic,
  'NunitoSans-Light': NunitoSansLight,
  'NunitoSans-LightItalic': NunitoSansLightItalic,
  'NunitoSans-Regular': NunitoSansRegular,
  'NunitoSans-SemiBold': NunitoSansSemiBold,
  'NunitoSans-SemiBoldItalic': NunitoSansSemiBoldItalic,
}
Object.keys(obj).forEach((font) => {
  const { injectStyleTag } = createWebFont(font, null, obj[font])

  injectStyleTag()
})
