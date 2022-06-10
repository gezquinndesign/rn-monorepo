import { IconProps } from 'react-native-vector-icons/Icon'
import Feather from 'react-native-vector-icons/Feather'
import FeatherGlyphMap from 'react-native-vector-icons/glyphmaps/Feather.json' 

const FeatherGlyphNames = Object.keys(FeatherGlyphMap)

export { Feather }

export interface FeatherIconProps extends IconProps {
  name: FeatherIconName
}

export type FeatherIconName = typeof FeatherGlyphNames[number]
