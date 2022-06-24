import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { Example as HStack } from './HStack';
import { Example as Row } from './Row';
import Wrapper from '../../../Wrapper';

storiesOf('Layout/Stacks/HStack or Row', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('HStack', () => <HStack />)
  .add('Row', () => <Row />);
