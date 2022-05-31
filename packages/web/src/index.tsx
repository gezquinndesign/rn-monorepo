import { ComponentType } from 'react'
import { AppRegistry } from 'react-native-web'
import { App } from 'components/src/App'
import { name as appName } from '../app.json'

const render = (AppComponent: ComponentType) => {
  AppRegistry.registerComponent(appName, () => AppComponent)
  AppRegistry.runApplication(appName, {
    rootTag: document.getElementById('root'),
  })
}

render(App)
