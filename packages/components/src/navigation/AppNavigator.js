import React, { useState } from 'react'
import { Platform, View, Image } from 'react-native'
import { StateNavigator } from 'navigation'
import { NavigationHandler } from 'navigation-react'
import {
  NavigationStack,
  Scene,
  TabBar,
  TabBarItem,
} from 'navigation-react-native'
import createStateNavigator from './createStateNavigator'
import Home from './FieldGuide'
import Notifications from './Phrasebook'
import Tabs from './Tabs'
import Tweet from './Tweet'
import Timeline from './Timeline'
import { getFollows } from './data'

var stateNavigator = createStateNavigator()

const notificationsNavigator = new StateNavigator(stateNavigator)
notificationsNavigator.historyManager.disabled = true
notificationsNavigator.historyManager.stop()

const bird = require('./icon-bird.png')
const phrase = require('./icon-phrase.png')
const reference = require('./icon-reference.png')
const about = require('./icon-about.png')

const App = () => {
  const [notified, setNotified] = useState(false)
  return Platform.OS === 'ios' ? (
    <TabBar barTintColor="#fff">
      <TabBarItem
        title="Field Guide"
        image={{ uri: Image.resolveAssetSource(bird).uri, height: 25 }}
      >
        <NavigationHandler stateNavigator={stateNavigator}>
          <NavigationStack>
            <Scene stateKey="home">
              <Home />
            </Scene>
            <Scene stateKey="tweet">
              <Tweet />
            </Scene>
            <Scene stateKey="timeline">
              <Timeline />
            </Scene>
          </NavigationStack>
        </NavigationHandler>
      </TabBarItem>
      <TabBarItem
        title="Phrasebook"
        image={{ uri: Image.resolveAssetSource(phrase).uri, height: 25 }}
        // badge={!notified ? '' + getFollows().length : null}
        onPress={() => {
          setNotified(true)
        }}
      >
        <NavigationHandler stateNavigator={notificationsNavigator}>
          <NavigationStack>
            <Scene stateKey="notifications">
              <Notifications />
            </Scene>
            <Scene stateKey="tweet">
              <Tweet />
            </Scene>
            <Scene stateKey="timeline">
              <Timeline />
            </Scene>
          </NavigationStack>
        </NavigationHandler>
      </TabBarItem>
      <TabBarItem
        title="Reference"
        image={{ uri: Image.resolveAssetSource(reference).uri, height: 25 }}
        // badge={!notified ? '' + getFollows().length : null}
        onPress={() => {
          setNotified(true)
        }}
      >
        <NavigationHandler stateNavigator={notificationsNavigator}>
          <NavigationStack>
            <Scene stateKey="notifications">
              <Notifications />
            </Scene>
            <Scene stateKey="tweet">
              <Tweet />
            </Scene>
            <Scene stateKey="timeline">
              <Timeline />
            </Scene>
          </NavigationStack>
        </NavigationHandler>
      </TabBarItem>
      <TabBarItem
        title="About"
        image={{ uri: Image.resolveAssetSource(about).uri, height: 25 }}
        // badge={!notified ? '' + getFollows().length : null}
        onPress={() => {
          setNotified(true)
        }}
      >
        <NavigationHandler stateNavigator={notificationsNavigator}>
          <NavigationStack>
            <Scene stateKey="notifications">
              <Notifications />
            </Scene>
            <Scene stateKey="tweet">
              <Tweet />
            </Scene>
            <Scene stateKey="timeline">
              <Timeline />
            </Scene>
          </NavigationStack>
        </NavigationHandler>
      </TabBarItem>
    </TabBar>
  ) : (
    <NavigationHandler stateNavigator={stateNavigator}>
      <NavigationStack
        crumbStyle={(from) => (from ? 'scale_in' : 'scale_out')}
        unmountStyle={(from) => (from ? 'slide_in' : 'slide_out')}
        unmountedStyle={{ translate: 100, scale: 1, opacity: 1 }}
        mountedStyle={{ translate: 0, scale: 1, opacity: 1 }}
        crumbedStyle={{ translate: 5, scale: 0.9, opacity: 0 }}
        renderTransition={({ translate, scale, opacity }, scene, key) => (
          <View
            key={key}
            style={{
              transform: `translate(${translate}%) scale(${scale}, ${scale})`,
              opacity,
              position: 'absolute',
              backgroundColor: '#green',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              overflow: 'hidden',
            }}
          >
            {scene}
          </View>
        )}
      >
        <Scene stateKey="home">
          <Tabs />
        </Scene>
        <Scene stateKey="notifications">
          <Notifications />
        </Scene>
        <Scene stateKey="reference">
          <Notifications />
        </Scene>
        <Scene stateKey="about">
          <Notifications />
        </Scene>
        <Scene stateKey="tweet">
          <Tweet />
        </Scene>
        <Scene stateKey="timeline">
          <Timeline />
        </Scene>
      </NavigationStack>
    </NavigationHandler>
  )
}

export default App
