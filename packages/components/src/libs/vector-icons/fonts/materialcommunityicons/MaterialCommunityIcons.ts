import { IconProps } from 'react-native-vector-icons/Icon'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialCommunityIconsGlyphMap from 'react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json' 

const MaterialCommunityIconsGlyphNames = Object.keys(MaterialCommunityIconsGlyphMap)

export { MaterialCommunityIcons }

export interface MaterialCommunityIconsIconProps extends IconProps {
  name: MaterialCommunityIconsIconName
}

export type MaterialCommunityIconsIconName = typeof MaterialCommunityIconsGlyphNames[number]
