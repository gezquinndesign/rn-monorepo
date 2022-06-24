import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../../Wrapper';

import { Example as Basic } from './Basic';
import { Example as Callback } from './Callback';
import { Example as Duration } from './Duration';

storiesOf('Components/Expanders/Collapse', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Animation Duration', () => <Duration />)
  .add('onAnimationStart and onAnimationEnd', () => <Callback />);
