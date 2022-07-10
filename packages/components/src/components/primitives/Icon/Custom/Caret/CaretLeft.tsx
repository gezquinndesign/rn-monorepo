import React from 'react'
import { Icon, Center } from 'native-base'
import { Path, G, ClipPath, Defs, Rect } from 'react-native-svg'
export const CaretLeft = ({ size = 'md', color = 'currentColor' }) => {
  return (
    <Center>
      <Icon
        size={size}
        width="100%"
        height="100%"
        viewBox="0 0 28 28"
        fill="none"
      >
        <Path
          d="M17.5 22.75L8.75 14L17.5 5.25"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="transparent"
        />
      </Icon>
    </Center>
  )
}
