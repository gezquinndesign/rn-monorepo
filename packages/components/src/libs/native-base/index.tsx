import React from 'react'
import {
  NativeBaseProvider as OriginalNativeBaseProvider,
  extendTheme,
  NativeBaseProviderProps,
} from 'native-base'
import { theme } from '../../../core/theme'

export function NativeBaseProvider(props: NativeBaseProviderProps) {
  return (
    <OriginalNativeBaseProvider theme={  extendTheme(theme)}>
      {props.children}
    </OriginalNativeBaseProvider>
  )
}
