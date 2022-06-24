import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../../Wrapper';
import {Example as Usage} from './Usage';
import {Example as ManageFocus} from './ManageFocus';
import {Example as DefaultValue} from './DefaultValue';
import {Example as Size} from './Size';
import {Example as Playground} from './Playground';
import {Example as Variants} from './Variants';
import {Example as FormControlled} from './FormControlled';
import {Example as Placeholder} from './Placeholder';

storiesOf('Forms/PinInput', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Playground', () => <Playground />)
  .add('Usage', () => <Usage />)
  .add('Size', () => <Size />)
  .add('DefaultValue', () => <DefaultValue />)
  .add('Placeholder', () => <Placeholder />)
  .add('ManageFocus', () => <ManageFocus />)
  .add('Variants', () => <Variants />)
  .add('FormControlled', () => <FormControlled />);
