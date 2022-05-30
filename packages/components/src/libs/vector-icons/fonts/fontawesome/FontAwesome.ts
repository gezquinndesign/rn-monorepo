import { IconProps } from 'react-native-vector-icons/Icon'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesomeGlyphMap from 'react-native-vector-icons/glyphmaps/FontAwesome.json' 

const FontAwesomeGlyphNames = Object.keys(FontAwesomeGlyphMap)

export { FontAwesome }

export interface FontAwesomeIconProps extends IconProps {
  name: FontAwesomeIconName
}

export type FontAwesomeIconName = typeof FontAwesomeGlyphNames[number]
