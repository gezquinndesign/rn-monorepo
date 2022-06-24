import { IconProps } from 'react-native-vector-icons/Icon'
import Ionicons from 'react-native-vector-icons/Ionicons'
import IoniconsGlyphMap from 'react-native-vector-icons/glyphmaps/Ionicons.json' 

const IoniconsGlyphNames = Object.keys(IoniconsGlyphMap)

export { Ionicons }

export interface IoniconsIconProps extends IconProps {
  name: IoniconsIconName
}

export type IoniconsIconName = typeof IoniconsGlyphNames[number]
