import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../../Wrapper';
import { Basic } from './Basic';
import { Sizes } from './Sizes';
import { AllIcons } from './AllIcons';
import { CustomIcon } from './CustomIcon';
import { CreateIcon } from './CreateIcon';
import { ThirdPartyIcons } from './ThirdPartyIcons';

storiesOf('Misc/Icon', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('All Icons', () => <AllIcons />)
  .add('Basic', () => <Basic />)
  .add('Sizes', () => <Sizes />)
  .add('CustomIcon', () => <CustomIcon />)
  .add('CreateIcon', () => <CreateIcon />)
  .add('Integration with Third Party Icons', () => <ThirdPartyIcons />);
