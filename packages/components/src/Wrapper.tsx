import React from 'react'
import {
  Box,
  NativeBaseProvider,
  useColorMode,
  IconButton,
  MoonIcon,
  ColorMode,
  useColorModeValue,
  Tooltip,
  SunIcon,
  extendTheme,
  Button,
  Input,
} from 'native-base'
import type { StorageManager } from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Config from './nativebase.config'
import { theme } from '../core/theme'

export const myTheme = extendTheme(theme)

// console.log('MY THEME', myTheme)

export type MyThemeType = typeof myTheme
declare module 'native-base' {
  interface ICustomTheme extends MyThemeType {}
}

function MyWrapper({ children }: any) {
  const { colorMode, toggleColorMode } = useColorMode()

  const bgColor = useColorModeValue(`gray.50`, `gray.800`)

  return (
    <Box
      flex={1}
      px="3"
      justifyContent="center"
      alignItems="center"
      bg={bgColor}
      safeAreaY
    >
      <Tooltip
        label={colorMode === 'dark' ? 'Enable light mode' : 'Enable dark mode'}
        placement="bottom right"
        openDelay={300}
        closeOnClick={false}
      >
        <IconButton
          position="absolute"
          top={12}
          right={8}
          zIndex={4}
          onPress={toggleColorMode}
          icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          size="lg"
        />
      </Tooltip>
      {children}
    </Box>
  )
}

export function RenderTestButton() {
  const [state, setState] = React.useState(1)
  return (
    <Box style={{ position: 'absolute', top: 10, left: 20 }} m={2} bg="red.100">
      <Input m={2} size="my-size" />
      <Button
        size=""
        variant={'myNewButton'}
        // title={state.toString()}
        onPress={() => setState(state + 1)}
      />
    </Box>
  )
}
export default ({ children, theme = myTheme }: any) => {

  // const colorModeManager: StorageManager = {
  //   get: async () => {
  //     try {
  //       const json = await AsyncStorage.getItem('sb-addon-themes-3')
  //       return JSON.parse(json).current || 'light'
  //     } catch (e) {
  //       console.log(e)
  //       return 'light'
  //     }
  //   },
  //   set: async (value: ColorMode) => {
  //     try {
  //       const json = await AsyncStorage.getItem('sb-addon-themes-3')
  //       const obj = JSON.parse(json)
  //       obj.current = value
  //       await AsyncStorage.setItem('sb-addon-themes-3', JSON.stringify(obj))
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   },
  // }
  // console.log("THEME", theme.fontSizes)
  return (
    <NativeBaseProvider
      theme={theme}
      config={Config}
      // colorModeManager={colorModeManager}
      initialWindowMetrics={{
        frame: { x: 0, y: 0, width: 0, height: 0 },
        insets: { top: 0, left: 0, right: 0, bottom: 0 },
      }}
    >
      {/* <MyWrapper> */}
      {children}
      {/* </MyWrapper> */}
    </NativeBaseProvider>
  )
}
