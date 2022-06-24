import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../../Wrapper';
import { Example as Stack } from './basic';
import { Example as Divider } from './divider';

storiesOf('Layout/Stacks/Stack', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Stack />)
  .add('Divider', () => <Divider />);
