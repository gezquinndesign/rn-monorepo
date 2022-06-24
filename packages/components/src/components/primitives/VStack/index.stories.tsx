import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../../Wrapper';
import { Example as VStack } from './VStack';
import { Example as Column } from './Column';

storiesOf('Layout/Stacks/VStack or Column', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('VStack', () => <VStack />)
  .add('Column', () => <Column />);
