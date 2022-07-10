import React, { useContext, useState } from 'react'
import { Platform } from 'react-native'
import { NavigationContext } from 'navigation-react'
import { TabBar, TabBarItem, useNavigated } from 'navigation-react-native'

import FieldGuide from './FieldGuide'
import Phrasebook from './Phrasebook'
import Reference from './Reference'
import About from './About'

import DATA from '../data/ngarinyin.ts'

export default () => {
  const { stateNavigator, data } = useContext(NavigationContext)
  const tabs = { fieldguide: 0, phrasebook: 1, reference: 2, about: 3 }
  const keys = { 0: 'fieldguide', 1: 'phrasebook', 2: 'reference', 3: 'about' }
  const titles = {
    fieldguide: 'Field Guide',
    phrasebook: 'Phrasebook',
    reference: 'Reference',
    about: 'About',
  }
  const [tab, setTab] = useState(tabs[data.tab])
    console.log('TABS_DATA', data, tab)

  const getHref = (link) => stateNavigator.historyManager.getHref(link)
  useNavigated(() => {
    if (Platform.OS === 'web') {
      document.title = titles[data.tab]
      setTab(tabs[data.tab])
    }
  })

  // const fieldguide =
  //     tab === 0
  //       ? require('../assets/icons/bird-fill.png')
  //       : require('../assets/icons/bird.png'),
  //   phrasebook =
  //     tab === 1
  //       ? require('../assets/icons/chat-circle-text-fill.png')
  //       : require('../assets/icons/chat-circle-text.png'),
  //   reference =
  //     tab === 2
  //       ? require('../assets/icons/book-open-fill.png')
  //       : require('../assets/icons/book-open.png'),
  //   about =
  //     tab === 3
  //       ? require('../assets/icons/question-fill.png')
  //       : require('../assets/icons/question.png')

  return (
    <TabBar
      tab={tab}
      primary={true}
      bottomTabs={true}
      barTintColor="#fff"
      labelVisibilityMode="labeled"
      unselectedTintColor="#734F3B"
      selectedTintColor="#734F3B"
      onChangeTab={(selectedTab) => {
        if (Platform.OS === 'web') {
          stateNavigator.refresh({ tab: keys[selectedTab] })
          // eslint-disable-next-line no-restricted-globals
          history.back()
        } else {
          // stateNavigator.refresh({ tab: keys[selectedTab] })
          setTab(selectedTab)
        }
      }}
    >
      <TabBarItem
        fontFamily="NunitoSans-Regular"
        fontWeight={"400"}
        title="Field Guide"
        image={
          tab === 0
            ? require('../assets/icons/bird-fill.png')
            : require('../assets/icons/bird.png')
        }
        href={getHref(stateNavigator.getRefreshLink({ tab: 'fieldguide' }))}
        onPress={() => {
          stateNavigator.navigate('fieldguide', { tab: 'fieldguide' })
        }}
      >
        <FieldGuide items={DATA.fieldguide.collections} tab={tab}/>
      </TabBarItem>
      <TabBarItem
        fontFamily="NunitoSans-Regular"
        fontWeight={"400"}
        title="Phrasebook"
        image={
          tab === 1
            ? require('../assets/icons/chat-circle-text-fill.png')
            : require('../assets/icons/chat-circle-text.png')
        }
        href={getHref(stateNavigator.getRefreshLink({ tab: 'phrasebook' }))}
        onPress={() => {
          stateNavigator.navigate('phrasebook', { tab: 'phrasebook' })
        }}
      >
        <Phrasebook items={DATA.phrasebook.collections}  tab={tab}/>
      </TabBarItem>
      <TabBarItem
        fontFamily="NunitoSans-Regular"
        fontWeight={"400"}
        title="Reference"
        image={
          tab === 2
            ? require('../assets/icons/book-open-fill.png')
            : require('../assets/icons/book-open.png')
        }
        href={getHref(stateNavigator.getRefreshLink({ tab: 'reference' }))}
        onPress={() => {
          stateNavigator.navigate('fieldguide', { tab: 'reference' })
        }}
      >
        <Reference items={DATA.reference.collections}  tab={tab}/>
      </TabBarItem>
      <TabBarItem
        fontFamily="NunitoSans-Regular"
        fontWeight={"400"}
        title="About"
        image={
          tab === 3
            ? require('../assets/icons/question-fill.png')
            : require('../assets/icons/question.png')
        }
        href={getHref(stateNavigator.getRefreshLink({ tab: 'about' }))}
        onPress={() => {
          stateNavigator.navigate('fieldguide', { tab: 'about' })
        }}
      >
        <About items={DATA.about.collections}  tab={tab}/>
      </TabBarItem>
    </TabBar>
  )
}
