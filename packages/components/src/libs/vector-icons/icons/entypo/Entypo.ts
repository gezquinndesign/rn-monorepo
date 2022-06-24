import { IconProps } from 'react-native-vector-icons/Icon'
import Entypo from 'react-native-vector-icons/Entypo'
import EntypoGlyphMap from 'react-native-vector-icons/glyphmaps/Entypo.json' 

const EntypoGlyphNames = Object.keys(EntypoGlyphMap)

export { Entypo }

export interface EntypoIconProps extends IconProps {
  name: EntypoIconName
}

export type EntypoIconName = typeof EntypoGlyphNames[number]
