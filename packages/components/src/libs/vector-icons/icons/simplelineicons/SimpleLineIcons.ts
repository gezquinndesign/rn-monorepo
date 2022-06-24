
import { IconProps } from 'react-native-vector-icons/Icon'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import SimpleLineIconsGlyphMap from 'react-native-vector-icons/glyphmaps/SimpleLineIcons.json' 

const SimpleLineIconsGlyphNames = Object.keys(SimpleLineIconsGlyphMap)

export { SimpleLineIcons }

export interface SimpleLineIconsIconProps extends IconProps {
  name: SimpleLineIconsIconName
}

export type SimpleLineIconsIconName = typeof SimpleLineIconsGlyphNames[number]
