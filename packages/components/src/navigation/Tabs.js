import React, {useContext, useState} from 'react';
import {Platform} from 'react-native';
import {NavigationContext} from 'navigation-react';
import {TabBar, TabBarItem, useNavigated} from 'navigation-react-native';
import Home from './FieldGuide';
import Notifications from './Phrasebook';
import {getHome, getFollows} from './data';
import Phrasebook from './Phrasebook';
import Reference from './Reference';
import About from './About';

export default () => {
  const {stateNavigator, data} = useContext(NavigationContext);
  const tabs = {home: 0, notifications: 1};
  const [tab, setTab] = useState(tabs[data.tab]);
  const getHref = link => stateNavigator.historyManager.getHref(link);
  useNavigated(() => {
    if (Platform.OS === 'web') {
      document.title = !tabs[data.tab] ? 'Home' : 'Notifications';
      setTab(tabs[data.tab])
    }
  });
  return (
    <TabBar
      tab={tab}
      primary={true}
      bottomTabs={true}
      barTintColor="#fff"
      selectedTintColor="deepskyblue"
      onChangeTab={(selectedTab) => {
        if (Platform.OS === 'web') {
          if (selectedTab === 1)
            stateNavigator.refresh({tab: 'notifications'});
          else
          // eslint-disable-next-line no-restricted-globals
            history.back();
        } else {
          setTab(selectedTab);
        }
      }}>
      <TabBarItem
        title="Field Guide"
        image={require('./icon-bird.png')}
        href={getHref(stateNavigator.getRefreshLink({tab: 'home'}))}>
        <Home tweets={getHome()} />
      </TabBarItem>
      <TabBarItem
        title="Phrasebook"
        image={require('./icon-phrase.png')}
        href={getHref(stateNavigator.getRefreshLink({tab: 'notifications'}))}>
        <Phrasebook follows={getFollows()} />
      </TabBarItem>
      <TabBarItem
        title="Reference"
        image={require('./icon-reference.png')}
        href={getHref(stateNavigator.getRefreshLink({tab: 'notifications'}))}>
        <Reference follows={getFollows()} />
      </TabBarItem>
      <TabBarItem
        title="About"
        image={require('./icon-about.png')}
        href={getHref(stateNavigator.getRefreshLink({tab: 'notifications'}))}>
        <About follows={getFollows()} />
      </TabBarItem>
    </TabBar>
  );
}
