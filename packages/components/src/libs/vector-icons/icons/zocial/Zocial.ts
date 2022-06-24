
import { IconProps } from 'react-native-vector-icons/Icon'
import Zocial from 'react-native-vector-icons/Zocial'
import ZocialGlyphMap from 'react-native-vector-icons/glyphmaps/Zocial.json' 

const ZocialGlyphNames = Object.keys(ZocialGlyphMap)

export { Zocial }

export interface ZocialIconProps extends IconProps {
  name: ZocialIconName
}

export type ZocialIconName = typeof ZocialGlyphNames[number]
