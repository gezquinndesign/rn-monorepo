/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ComponentType } from 'react'
import { App } from 'components/src/App'
import { name as appName } from '../app.json'

const { AppRegistry } = require('react-native-web')

const render = (AppComponent: ComponentType) => {
  AppRegistry.registerComponent(appName, () => AppComponent)
  AppRegistry.runApplication(appName, {
    rootTag: document.getElementById('root'),
  })
}

render(App)
