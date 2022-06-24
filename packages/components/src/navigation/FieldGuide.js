import React from 'react';
import {NavigationBar, CoordinatorLayout} from 'navigation-react-native';
import Tweets from './Tweets';
import {getHome} from './data';

export default () => (
  <CoordinatorLayout>
    <NavigationBar
      title="Field Guide"
      barTintColor="#fff" />
    <Tweets tweets={getHome()} />
  </CoordinatorLayout>
);
