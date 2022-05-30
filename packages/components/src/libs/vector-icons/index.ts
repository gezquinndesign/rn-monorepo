import { ThemeColors } from '../../../../core/src'

import { MaterialIconProps } from './fonts/materialicons/MaterialIcons'
import { OcticonIconProps } from './fonts/octicons2/Octicons2'
import { EntypoIconProps } from './fonts/entypo/Entypo'
import { FontAwesomeIconProps } from './fonts/fontawesome/FontAwesome'
import { IoniconsIconProps } from './fonts/ionicons/Ionicons'

export * from './fonts/materialicons/MaterialIcons'
export * from './fonts/octicons2/Octicons2'
export * from './fonts/entypo/Entypo'
export * from './fonts/fontawesome/FontAwesome'
export * from './fonts/ionicons/Ionicons'

export type IconProp = {
  color?: keyof ThemeColors
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
