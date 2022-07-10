// import { Theme, ThemeColors } from '@devhub/core'
import React, { ReactNode, useEffect, useLayoutEffect } from 'react'
import {
  KeyboardAvoidingView,
  StatusBar,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native'
import SplashScreen from 'react-native-splash-screen'

import { Platform } from '../../libs/platform'
import { ThemedSafeAreaView } from '../themed/ThemedSafeAreaView'
import { ThemedView } from '../themed/ThemedView'
import { ConditionalWrap } from './ConditionalWrap'

export interface ScreenProps {
  children?: ReactNode
  enableSafeArea?: boolean
  statusBarBackgroundThemeColor?: any,//keyof ThemeColors | 'header' | 'transparent'
  style?: StyleProp<ViewStyle>
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
})

export function Screen(props: ScreenProps) {
  const {
    enableSafeArea = true,
    statusBarBackgroundThemeColor,
    style,
    ...viewProps
  } = props

  // const theme = useTheme()
  const theme = {}//useTheme()

  useLayoutEffect(() => {
    updateStyles({
      statusBarBackgroundThemeColor,
      theme,
    })
  }, ["orange", theme])

  useEffect(() => {
    if (SplashScreen) {
      SplashScreen.hide()
    }
  }, [])

  return (
    <ConditionalWrap
      condition
      wrap={(children) =>
        Platform.select({
          ios: (
            <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
              {children}
            </KeyboardAvoidingView>
          ),
          default: <View style={styles.wrapper}>{children}</View>,
        })
      }
    >
      {enableSafeArea ? (
        <ThemedSafeAreaView
          backgroundColor="backgroundColor"
          {...viewProps}
          style={[styles.container, style]}
        />
      ) : (
        <ThemedView
          backgroundColor="backgroundColor"
          {...viewProps}
          style={[styles.container, style]}
        />
      )}
    </ConditionalWrap>
  )
}

function updateStyles({
  theme,
  statusBarBackgroundThemeColor,
}: {
  theme: any,//Theme
  statusBarBackgroundThemeColor?: ScreenProps['statusBarBackgroundThemeColor']
}) {
  StatusBar.setBarStyle(theme.isDark ? 'light-content' : 'dark-content')

  if (Platform.OS === 'android') {
    const themeColor: any = //keyof ThemeColors | 'transparent' =
    "orange"
      // statusBarBackgroundThemeColor === 'header'
      //   ? getColumnHeaderThemeColors().normal
      //   : statusBarBackgroundThemeColor || 'backgroundColor'

    const color = "orange" as any

    StatusBar.setBackgroundColor(color, false)
    StatusBar.setTranslucent(color === 'transparent')
  }
}
