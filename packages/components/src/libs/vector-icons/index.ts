import { IColors } from 'native-base/lib/typescript/theme/base/colors'

import { AntDesignIconProps } from './icons/antdesign/AntDesign'
import { EntypoIconProps } from './icons/entypo/Entypo'
import { EvilIconsIconProps } from './icons/evilicons/Evilicons'
import { FeatherIconProps } from './icons/feather/Feather'
import { FontAwesomeIconProps } from './icons/fontawesome/FontAwesome'
import { FontistoIconProps } from './icons/fontisto/Fontisto'
import { FoundationIconProps } from './icons/foundation/Foundation'
import { IoniconsIconProps } from './icons/ionicons/Ionicons'
import { MaterialCommunityIconsIconProps } from './icons/materialcommunityicons/MaterialCommunityIcons'
import { MaterialIconsIconProps } from './icons/materialicons/MaterialIcons'
import { OcticonIconProps } from './icons/octicons/Octicons'
import { SimpleLineIconsIconProps } from './icons/simplelineicons/SimpleLineIcons'
import { ZocialIconProps } from './icons/zocial/Zocial'

export * from './icons/antdesign/AntDesign'
export * from './icons/entypo/Entypo'
export * from './icons/evilicons/Evilicons'
export * from './icons/feather/Feather'
export * from './icons/fontawesome/FontAwesome'
export * from './icons/fontisto/Fontisto'
export * from './icons/foundation/Foundation'
export * from './icons/ionicons/Ionicons'
export * from './icons/materialcommunityicons/MaterialCommunityIcons'
export * from './icons/materialicons/MaterialIcons'
export * from './icons/octicons/Octicons'
export * from './icons/simplelineicons/SimpleLineIcons'
export * from './icons/zocial/Zocial'

export type IconProp = {
  color?: keyof IColors
} & (
  | {
      family: 'antdesign'
      name: AntDesignIconProps['name']
    }
  | {
      family: 'entypo'
      name: EntypoIconProps['name']
    }
  | {
      family: 'evilicons'
      name: EvilIconsIconProps['name']
    }
  | {
      family: 'feather'
      name: FeatherIconProps['name']
    }
  | {
      family: 'fontawesome'
      name: FontAwesomeIconProps['name']
    }
  | {
      family: 'fontisto'
      name: FontistoIconProps['name']
    }
  | {
      family: 'foundation'
      name: FoundationIconProps['name']
    }
  | {
      family: 'ionicons'
      name: IoniconsIconProps['name']
    }
  | {
      family: 'material'
      name: MaterialIconsIconProps['name']
    }
  | {
      family: 'materialcommunity'
      name: MaterialCommunityIconsIconProps['name']
    }
  | {
      family: 'octicon'
      name: OcticonIconProps['name']
    }
  | {
      family: 'simplelineicons'
      name: SimpleLineIconsIconProps['name']
    }
  | {
      family: 'zocial'
      name: ZocialIconProps['name']
    }
)
