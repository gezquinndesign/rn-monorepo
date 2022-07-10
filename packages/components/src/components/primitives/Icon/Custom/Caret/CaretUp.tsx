import React from 'react'
import { Icon, Center } from 'native-base'
import { Path, G, ClipPath, Defs, Rect } from 'react-native-svg'
export const CaretUp = ({ size = 'md', color = 'currentColor' }) => {
  return (
    <Center>
      <Icon
        size={size}
        width="100%"
        height="100%"
        viewBox="0 0 20 20"
        fill="none"
      >
        <Path
          d="M3.75 12.5L10 6.25L16.25 12.5"
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
