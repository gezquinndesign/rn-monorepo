import React from 'react'
import { storiesOf } from '@storybook/react-native'
import Button from './Button'
import { NativeBaseProvider } from 'native-base'

export const Template = (props) => <Button {...props} />

// On-Device Register
storiesOf('Button', module)
  .addDecorator((getStory: any) => (
    <NativeBaseProvider>{getStory()}</NativeBaseProvider>
  ))
  .add('Button', (props) => <Template {...props} />)
