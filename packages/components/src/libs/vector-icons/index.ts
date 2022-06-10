import { IColors } from 'native-base/lib/typescript/theme/base/colors'

import { MaterialIconProps } from './fonts/materialicons/MaterialIcons'
import { MaterialCommunityIconProps } from './fonts/materialcommunityicons/MaterialCommunityIcons'
import { OcticonIconProps } from './fonts/octicons/Octicons'
import { EntypoIconProps } from './fonts/entypo/Entypo'
import { FeatherIconProps } from './fonts/feather/Feather'
import { FoundationIconProps } from './fonts/foundation/Foundation'
import { AntDesignIconProps } from './fonts/antdesign/AntDesign'
import { FontAwesomeIconProps } from './fonts/fontawesome/FontAwesome'
import { IoniconsIconProps } from './fonts/ionicons/Ionicons'

export * from './fonts/materialicons/MaterialIcons'
export * from './fonts/materialcommunityicons/MaterialCommunityIcons'
export * from './fonts/octicons/Octicons'
export * from './fonts/entypo/Entypo'
export * from './fonts/feather/Feather'
export * from './fonts/foundation/Foundation'
export * from './fonts/antdesign/AntDesign'
export * from './fonts/fontawesome/FontAwesome'
export * from './fonts/ionicons/Ionicons'

export type IconProp = {
  color?: keyof IColors
} & (
  | {
      family: 'octicon'
      name: OcticonIconProps['name']
    }
  | {
      family: 'material'
      name: MaterialIconProps['name']
    }
  | {
      family: 'materialcommunity'
      name: MaterialCommunityIconProps['name']
    }
  | {
      family: 'entypo'
      name: EntypoIconProps['name']
    }
  | {
      family: 'feather'
      name: FeatherIconProps['name']
    }
  | {
      family: 'foundation'
      name: FoundationIconProps['name']
    }
  | {
      family: 'antdesign'
      name: AntDesignIconProps['name']
    }
  | {
      family: 'fontawesome'
      name: FontAwesomeIconProps['name']
    }
  | {
      family: 'ionicons'
      name: IoniconsIconProps['name']
    }
)
