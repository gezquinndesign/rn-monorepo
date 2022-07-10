import React from 'react'
import { Platform } from 'react-native'
import { StateNavigator } from 'navigation'
import { NavigationStack } from 'navigation-react-native'

export default () => {
  const stateNavigator = new StateNavigator(
    [
      { key: 'fieldguide', route: '{tab?}', defaults: { tab: 'fieldguide' } },
      { key: 'phrasebook', route: '{tab?}', defaults: { tab: 'phrasebook' } },
      { key: 'reference', route: '{tab?}', defaults: { tab: 'reference' } },
      { key: 'about', route: '{tab?}', defaults: { tab: 'about' } },
      {
        key: 'timeline',
        route: 'timeline/{id}',
        trackCrumbTrail: true,
        defaultTypes: {
          id: 'string',
          c0: 'string',
          c1: 'string',
          c2: 'string',
          c3: 'string',
        },
      },
    ],
    NavigationStack.HistoryManager &&
      new NavigationStack.HistoryManager((url) => {
        const { state, data } = stateNavigator.parseLink(url)
        let fluent = stateNavigator.fluent().navigate('fieldguide')
        stateNavigator.historyManager.addHistory(fluent.url, true)
        return fluent.navigate(state.key, data).url
      }),
  )

  if (Platform.OS === 'web') stateNavigator.start()

  return stateNavigator
}
