import React from 'react'
import {
  NativeBaseProvider as OriginalNativeBaseProvider,
  extendTheme,
  NativeBaseProviderProps,
} from 'native-base'

const theme = extendTheme({
  components: {
    Input: {
      baseStyle: {
        // borderColor: "#000",
        backgroundColor: '#14161a',
        _focus: {
        //   borderColor: "#00b",
          backgroundColor: '#090a0c'
        },
        // _hover: {
        //   borderColor: "#00b",
        //   backgroundColor: "#fff"
        // }
      },
    },
  },
})

export function NativeBaseProvider(props: NativeBaseProviderProps) {
  return (
    <OriginalNativeBaseProvider theme={theme}>
      {props.children}
    </OriginalNativeBaseProvider>
  )
}
