
import { IconProps } from 'react-native-vector-icons/Icon'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontistoGlyphMap from 'react-native-vector-icons/glyphmaps/Fontisto.json' 

const FontistoGlyphNames = Object.keys(FontistoGlyphMap)

export { Fontisto }

export interface FontistoIconProps extends IconProps {
  name: FontistoIconName
}

export type FontistoIconName = typeof FontistoGlyphNames[number]
