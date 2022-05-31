import { IColors } from 'native-base/lib/typescript/theme/base/colors'

import { MaterialIconProps } from './fonts/materialicons/MaterialIcons'
import { OcticonIconProps } from './fonts/octicons/Octicons'
import { EntypoIconProps } from './fonts/entypo/Entypo'
import { FontAwesomeIconProps } from './fonts/fontawesome/FontAwesome'
import { IoniconsIconProps } from './fonts/ionicons/Ionicons'

export * from './fonts/materialicons/MaterialIcons'
export * from './fonts/octicons/Octicons'
export * from './fonts/entypo/Entypo'
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
      family: 'entypo'
      name: EntypoIconProps['name']
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
