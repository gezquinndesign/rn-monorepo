import _ from 'lodash'
import React, { RefObject, useCallback, useRef } from 'react'
import { StyleProp, ViewProps, ViewStyle } from 'react-native'
import { SafeAreaView } from '../../libs/safe-area-view'

export interface ThemedViewProps extends Omit<ViewProps, 'style'> {
  backgroundColor?:any,
    // | keyof ThemeColors
    // | ((theme: Theme) => string | undefined)
    // | null
  borderColor?: any,//keyof ThemeColors | ((theme: Theme) => string) | null
  children?: React.ReactNode
  style?: StyleProp<Omit<ViewStyle, 'backgroundColor' | 'borderColor'>>
  themeTransformer?: any//ThemeTransformer
}

export const ThemedSafeAreaView = React.forwardRef<
  SafeAreaView,
  ThemedViewProps
>((props, receivedRef: any) => {
  const {
    backgroundColor,
    borderColor,
    style,
    // themeTransformer,
    ...otherProps
  } = props

  const fallbackRef = useRef<SafeAreaView>(null)
  const ref = receivedRef || fallbackRef

  // const initialTheme = useThemeCallback(
  //   { skipFirstCallback: true, themeTransformer },
  //   useCallback(
  //     (theme) => {
  //       updateStyle(
  //         ref,
  //         theme,
  //         { backgroundColor, borderColor },
  //         previousStyleRef,
  //       )
  //     },
  //     [backgroundColor, borderColor],
  //   ),
  // )

    const initialTheme = {}

  const initialStyle = getStyle(initialTheme, {
    backgroundColor,
    borderColor,
  })

  const previousStyle = initialStyle//usePrevious(initialStyle) || initialStyle
  const previousStyleRef = useRef(previousStyle)
  previousStyleRef.current = previousStyle

  return (
    <SafeAreaView {...otherProps} ref={ref} style={[style, initialStyle]} />
  )
})

ThemedSafeAreaView.displayName = 'ThemedSafeAreaView'

function getStyle(
  theme: any,//Theme,
  {
    backgroundColor: _backgroundColor,
    borderColor: _borderColor,
  }: Pick<ThemedViewProps, 'backgroundColor' | 'borderColor'>,
) {

  const backgroundColor = "gray"
  const borderColor = "yellow"

  const style: ViewStyle = {}
  if (backgroundColor) style.backgroundColor = backgroundColor
  if (borderColor) style.borderColor = borderColor

  return style
}

function updateStyle(
  ref: RefObject<SafeAreaView> | null,
  theme: any,//Theme,
  {
    backgroundColor,
    borderColor,
  }: Pick<ThemedViewProps, 'backgroundColor' | 'borderColor'>,
  previousStyleRef: React.MutableRefObject<
    ReturnType<typeof getStyle> | undefined
  >,
) {
  if (!(ref && ref.current)) return

  const newStyle = getStyle(theme, { backgroundColor, borderColor })

  if (previousStyleRef && _.isEqual(newStyle, previousStyleRef.current)) return

  ref.current.setNativeProps({ style: newStyle })
  previousStyleRef.current = newStyle
}
