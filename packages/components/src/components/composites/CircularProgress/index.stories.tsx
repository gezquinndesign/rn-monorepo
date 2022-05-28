import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as Colors } from './Colors';
import { Example as Sizes } from './Sizes';
import { Example as Label } from './Label';
import { Example as Thickness } from './Thickness';
import { Example as Indeterminate } from './Indeterminate';
import { Example as TrackColor } from './TrackColor';
import { Example as MinMax } from './MinMax';
import { Example as ColorScheme } from './ColorScheme';

storiesOf('CircularProgress', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('ColorScheme', () => <ColorScheme />)
  .add('Colors', () => <Colors />)
  .add('TrackColor', () => <TrackColor />)
  .add('Label', () => <Label />)
  .add('Sizes', () => <Sizes />)
  .add('Thickness', () => <Thickness />)
  .add('Min and Max', () => <MinMax />)
  .add('Indeterminate', () => <Indeterminate />);
