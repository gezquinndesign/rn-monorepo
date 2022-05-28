import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../Wrapper';
import {Example as Basic} from './Basic';
import {Example as Spacing} from './Spacing';
import {Example as AlignmentAlign} from './AlignmentAlign';
import {Example as AlignmentJustify} from './AlignmentJustify';

storiesOf('Wrap', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Space', () => <Spacing />)
  .add('AlignmentAlign', () => <AlignmentAlign />)
  .add('AlignmentJustify', () => <AlignmentJustify />);
