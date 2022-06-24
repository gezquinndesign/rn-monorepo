import { IconProps } from 'react-native-vector-icons/Icon'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialIconsGlyphMap from 'react-native-vector-icons/glyphmaps/MaterialIcons.json' 

const MaterialIconsGlyphNames = Object.keys(MaterialIconsGlyphMap)

export { MaterialIcons }

export interface MaterialIconsIconProps extends IconProps {
  name: MaterialIconsIconName
}

export type MaterialIconsIconName = typeof MaterialIconsGlyphNames[number]
