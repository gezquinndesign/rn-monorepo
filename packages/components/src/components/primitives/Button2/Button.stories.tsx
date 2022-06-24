import React from 'react'
import { storiesOf } from '@storybook/react-native'
import Button from './Button'
import { NativeBaseProvider } from 'native-base'
import {
  withKnobs,
  text, boolean, object,
} from '@storybook/addon-knobs';

export const Template = (props) => <Button {...props} />

// On-Device Register
storiesOf('Buttons/Button', module)
.addDecorator(withKnobs)
  .addDecorator((getStory: any) => (
    <NativeBaseProvider>{getStory()}</NativeBaseProvider>
  ))
  .add('Button', (props) => {
    const style = {
      backgroundColor: '#FFF',
      border: '1px solid #DDD',
      borderRadius: 2,
      outline: 0,
      fontSize: 15,
      cursor: 'pointer',
    };
  return <Template {...props} disabled={boolean('Disabled', true)}
  style={object('Style', style)} />
})
