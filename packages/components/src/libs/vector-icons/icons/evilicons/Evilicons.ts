
import { IconProps } from 'react-native-vector-icons/Icon'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import EvilIconsGlyphMap from 'react-native-vector-icons/glyphmaps/EvilIcons.json' 

const EvilIconsGlyphNames = Object.keys(EvilIconsGlyphMap)

export { EvilIcons }

export interface EvilIconsIconProps extends IconProps {
  name: EvilIconsIconName
}

export type EvilIconsIconName = typeof EvilIconsGlyphNames[number]
