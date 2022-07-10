import React from 'react'
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

import Tabs from './Tabs'
import FieldGuide from './FieldGuide'
import Item from './Item'
import Phrasebook from './Phrasebook'
import Reference from './Reference'
import About from './About'

import DATA from '../data/ngarinyin.ts'

var fieldguideNavigator = createStateNavigator()

const phrasebookNavigator = new StateNavigator(fieldguideNavigator)
phrasebookNavigator.historyManager.disabled = true
phrasebookNavigator.historyManager.stop()

const referenceNavigator = new StateNavigator(fieldguideNavigator)
referenceNavigator.historyManager.disabled = true
referenceNavigator.historyManager.stop()

const aboutNavigator = new StateNavigator(fieldguideNavigator)
aboutNavigator.historyManager.disabled = true
aboutNavigator.historyManager.stop()

const App = () => {
  return Platform.OS === 'ios' ? (
    <TabBar
      barTintColor="#fff"
      unselectedTintColor="#734F3B"
      selectedTintColor="#734F3B"
    >
      <TabBarItem
        fontFamily="NunitoSans-Regular"
        fontWeight={'400'}
        title="Field Guide"
        image={{
          uri: Image.resolveAssetSource(require('../assets/icons/bird.png'))
            .uri,
          height: 25,
        }}
      >
        <NavigationHandler stateNavigator={fieldguideNavigator}>
          <NavigationStack>
            <Scene stateKey="fieldguide">
              <FieldGuide items={DATA.fieldguide.collections} />
            </Scene>
            <Scene stateKey="timeline">
              <Item />
            </Scene>
          </NavigationStack>
        </NavigationHandler>
      </TabBarItem>
      <TabBarItem
        fontFamily="NunitoSans-Regular"
        fontWeight={'400'}
        title="Phrasebook"
        image={{
          uri: Image.resolveAssetSource(
            require('../assets/icons/chat-circle-text.png'),
          ).uri,
          height: 25,
        }}
      >
        <NavigationHandler stateNavigator={phrasebookNavigator}>
          <NavigationStack>
            <Scene stateKey="fieldguide">
              <Phrasebook items={DATA.phrasebook.collections} />
            </Scene>
          </NavigationStack>
        </NavigationHandler>
      </TabBarItem>
      <TabBarItem
        fontFamily="NunitoSans-Regular"
        fontWeight={'400'}
        title="Reference"
        image={{
          uri: Image.resolveAssetSource(
            require('../assets/icons/book-open.png'),
          ).uri,
          height: 25,
        }}
      >
        <NavigationHandler stateNavigator={referenceNavigator}>
          <NavigationStack>
            <Scene stateKey="fieldguide">
              <Reference items={DATA.reference.collections} />
            </Scene>
          </NavigationStack>
        </NavigationHandler>
      </TabBarItem>
      <TabBarItem
        fontFamily="NunitoSans-Regular"
        fontWeight={'400'}
        title="About"
        image={{
          uri: Image.resolveAssetSource(require('../assets/icons/question.png'))
            .uri,
          height: 25,
        }}
      >
        <NavigationHandler stateNavigator={aboutNavigator}>
          <NavigationStack>
            <Scene stateKey="fieldguide">
              <About items={DATA.about.collections} />
            </Scene>
          </NavigationStack>
        </NavigationHandler>
      </TabBarItem>
    </TabBar>
  ) : (
    <NavigationHandler stateNavigator={fieldguideNavigator}>
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
        <Scene stateKey="fieldguide">
          <Tabs />
        </Scene>
        <Scene stateKey="timeline">
          <Item />
        </Scene>
      </NavigationStack>
    </NavigationHandler>
  )
}

export default App
