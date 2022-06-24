import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { withKnobs } from '@storybook/addon-knobs'
import Wrapper from '../../../Wrapper'
import { Example as Invalid } from './Invalid'
import { Example as WithIcon } from './WithIcon'
import { Example as Select } from './Select'
import { Example as Textarea } from './Textarea'
import { Example as Basic } from './Basic'

storiesOf('Forms/TextField', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Textarea', () => <Textarea />)
  .add('Select', () => <Select />)
  .add('WithIcon', () => <WithIcon />)
  .add('Invalid', () => <Invalid />)
