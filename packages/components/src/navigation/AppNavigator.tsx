import React, { useContext } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Platform,
} from 'react-native'

import Button from '../components/primitives/Button2/Button'
import { AppHeader } from '../components/composites/AppHeader/AppHeader'

import { StateNavigator } from 'navigation'
import { NavigationHandler, NavigationContext } from 'navigation-react'
import { NavigationStack } from 'navigation-react-native'

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
    height: '100%',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'gray',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: 'gray',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
})

declare let global: {
  HermesInternal?: boolean
}

//TODO: remove all ts-ignores!
// @ts-ignore
const historyManager =
  Platform.OS === 'web'
    // @ts-ignore
    ? new NavigationStack.HistoryManager(null, '')
    : undefined

const stateNavigator = new StateNavigator(
  [
    { key: 'hello', route: '' },
    { key: 'world', trackCrumbTrail: true },
  ],
  historyManager,
)

const Hello = () => {
  const { stateNavigator } = useContext(NavigationContext)
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <AppHeader />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                Code sharing using Monorepo
              </Text>
              <Text style={styles.sectionDescription}>
                Edit{' '}
                <Text style={styles.highlight}>
                  packages/components/App.tsx
                </Text>{' '}
                to change this fucking screen and then come back to see your
                edits (in the phone or the browser).
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                Web support via react-native-web
              </Text>
              <Text style={styles.sectionDescription}>
                Run{' '}
                <Text style={styles.highlight}>yarn workspace web start</Text>{' '}
                to open this app in the browser.
              </Text>
              <Text style={styles.sectionDescription}>
                It will share the same code from mobile, unless you create
                platform-specific files using the{' '}
                <Text style={styles.highlight}>.web.tsx</Text> extension (also
                supports <Text style={styles.highlight}>.android</Text>,{' '}
                <Text style={styles.highlight}>.ios</Text>,{' '}
                <Text style={styles.highlight}>.native</Text>, etc).
              </Text>
              <View style={styles.sectionDescription}>
                <Button
                  color="red"
                  text="Gezza's button"
                  onClick={() => {
                    stateNavigator.navigate('world', { size: 20 })
                  }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const World = () => {
  const { data } = useContext(NavigationContext)
  return <Text style={{ fontSize: data.size }}>World</Text>
}

const { hello, world } = stateNavigator.states

hello.renderScene = () => <Hello />
world.renderScene = () => <World />

if (Platform.OS === 'web') stateNavigator.start()
else stateNavigator.navigate('hello')

const AppNavigator = () => (
  //@ts-ignore
  <NavigationHandler stateNavigator={stateNavigator}>
    <NavigationStack />
  </NavigationHandler>
)

export { AppNavigator }
