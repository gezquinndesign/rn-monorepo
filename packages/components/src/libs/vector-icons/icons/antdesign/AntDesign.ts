import { IconProps } from 'react-native-vector-icons/Icon'
import AntDesign from 'react-native-vector-icons/AntDesign'
import AntDesignGlyphMap from 'react-native-vector-icons/glyphmaps/AntDesign.json' 

const AntDesignGlyphNames = Object.keys(AntDesignGlyphMap)

export { AntDesign }

export interface AntDesignIconProps extends IconProps {
  name: AntDesignIconName
}

export type AntDesignIconName = typeof AntDesignGlyphNames[number]
