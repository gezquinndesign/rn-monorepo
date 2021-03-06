import { AppRegistry } from 'react-native'
import {
  getStorybookUI,
  configure,
  addDecorator,
} from '@storybook/react-native'
import { name as appName } from '../app.json'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { loadStories } from './storyLoader'

import './rn-addons'

// import stories
configure(() => {
  loadStories()
}, module)

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  // DOC: Uncomment this to get normal app view
  // onDeviceUI: false,
  //TODO: make host a variable
  host: '192.168.0.14',
  port: 7007,
  asyncStorage: AsyncStorage,
})

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent(appName, () => StorybookUIRoot)

export default StorybookUIRoot
