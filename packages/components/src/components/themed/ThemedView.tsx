import _ from 'lodash'
import React, { RefObject, useCallback, useRef } from 'react'
import { StyleProp, View, ViewProps, ViewStyle } from 'react-native'

export interface ThemedViewProps extends Omit<ViewProps, 'style'> {
  backgroundColor?: any,
    // | keyof ThemeColors
    // | ((theme: Theme) => string | undefined)
    // | null
  borderColor?: any,// keyof ThemeColors | ((theme: Theme) => string) | null
  children?: React.ReactNode
  style?: StyleProp<Omit<ViewStyle, 'backgroundColor' | 'borderColor'>>
  themeTransformer?: any//ThemeTransformer
}

export const ThemedView = React.forwardRef<View, ThemedViewProps>(
  (props, receivedRef: any) => {
    const {
      backgroundColor,
      borderColor,
      style,
      themeTransformer,
      ...otherProps
    } = props

    const fallbackRef = useRef<View>(null)
    const ref = receivedRef || fallbackRef

    const initialTheme = {}

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

    const initialStyle = getStyle(initialTheme, {
      backgroundColor,
      borderColor,
    })

    const previousStyle = {}//usePrevious(initialStyle) || initialStyle
    const previousStyleRef = useRef(previousStyle)
    previousStyleRef.current = previousStyle

    return <View {...otherProps} ref={ref} style={[style, initialStyle]} />
  },
)

ThemedView.displayName = 'ThemedView'

function getStyle(
  theme: any,//Theme,
  {
    backgroundColor: _backgroundColor,
    borderColor: _borderColor,
  }: Pick<ThemedViewProps, 'backgroundColor' | 'borderColor'>,
) {

  const backgroundColor = "silver"
  const borderColor = "green"

  const style: ViewStyle = {}
  if (backgroundColor) style.backgroundColor = backgroundColor
  if (borderColor) style.borderColor = borderColor

  return style
}

function updateStyle(
  ref: RefObject<View> | null,
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

export type ThemedView = View
