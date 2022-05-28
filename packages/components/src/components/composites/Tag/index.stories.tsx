import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../Wrapper';
import {Example as Basic} from './Basic';
import {Example as Size} from './Size';
import {Example as Variants} from './Variants';
import {Example as WithIcon} from './WithIcon';
import {Example as Custom} from './Custom';

storiesOf('Tag', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Variants', () => <Variants />)
  .add('Sizes', () => <Size />)
  .add('WithIcon', () => <WithIcon />)
  .add('Custom Tag', () => <Custom />);
