import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../../Wrapper';
import { Example as Usage } from './Basic';
import { Example as Playground } from './Playground';
import { Example as Multiple } from './Multiple';
import { Example as AccessingInternalState } from './AccessingInternalState';
import { Example as ExpandedStyle } from './ExpandedStyle';
import { Example as Toggle } from './Toggle';
import { Example as DefaultIndex } from './DefaultIndex';

storiesOf('Components/Expanders/Accordion', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Playground', () => <Playground />)
  .add('Usage', () => <Usage />)
  .add('Multiple', () => <Multiple />)
  .add('Default Index', () => <DefaultIndex />)
  .add('Toggle', () => <Toggle />)
  .add('Expanded Style', () => <ExpandedStyle />)
  .add('Accessing Internal State', () => <AccessingInternalState />);
