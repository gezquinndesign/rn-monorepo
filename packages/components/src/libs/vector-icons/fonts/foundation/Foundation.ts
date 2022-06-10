import { IconProps } from 'react-native-vector-icons/Icon'
import Foundation from 'react-native-vector-icons/Foundation'
import FoundationGlyphMap from 'react-native-vector-icons/glyphmaps/Foundation.json' 

const FoundationGlyphNames = Object.keys(FoundationGlyphMap)

export { Foundation }

export interface FoundationIconProps extends IconProps {
  name: FoundationIconName
}

export type FoundationIconName = typeof FoundationGlyphNames[number]
