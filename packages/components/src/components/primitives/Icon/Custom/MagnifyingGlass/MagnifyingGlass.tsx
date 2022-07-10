import React from 'react'
import { Icon, Center } from 'native-base'
import { Path, G, ClipPath, Defs, Rect } from 'react-native-svg'
export const MagnifyingGlass = ({ size = 'md', color = 'currentColor' }) => {
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
          d="M9.0625 15.625C12.6869 15.625 15.625 12.6869 15.625 9.0625C15.625 5.43813 12.6869 2.5 9.0625 2.5C5.43813 2.5 2.5 5.43813 2.5 9.0625C2.5 12.6869 5.43813 15.625 9.0625 15.625Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="transparent"
        />
        <Path
          d="M13.7031 13.7031L17.5 17.5"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Icon>
    </Center>
  )
}
