import React from 'react'
import { IconProps } from 'react-native-vector-icons/Icon'

export function createWebFont(
  fontFamily: string,
  OriginalFontComponent: React.ComponentType | any,
  iconFontURL: string | any,
) {
  const cssText = [
    `@font-face { src:url(${iconFontURL});font-family: ${fontFamily}; format('ttf') }`,
  ].join('\n')

  return {
    Component(props: IconProps) {
      return React.createElement(OriginalFontComponent, {
        ...props,
        style: [props.style, { userSelect: 'none' }],
      })
    },
    injectStyleTag() {
      const style = document.createElement('style')
      style.type = 'text/css'
      style.id = `font-family-${fontFamily}`

      if ((style as any).styleSheet) {
        ;(style as any).styleSheet.cssText = cssText
      } else {
        style.appendChild(document.createTextNode(cssText))
      }

      if (document.head) document.head.appendChild(style)
    },
  }
}
