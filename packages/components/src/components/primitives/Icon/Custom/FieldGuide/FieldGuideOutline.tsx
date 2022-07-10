import React from 'react'
import { Icon, Center } from 'native-base'
import { Path, Circle, Rect, Line } from 'react-native-svg'
export const FieldGuideOutline = ({ size = 'md', color = 'currentColor' }) => {
  return (
    <Center>
      <Icon size={size} width="100%" height="100%" viewBox="0 0 256 256">
        <Rect width="256" height="256" fill="none" />
        <Circle cx="164" cy="68" r="12" />
        <Line
          x1="120"
          y1="136"
          x2="80"
          y2="184"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
        <Path
          d="M208,96v24a96,96,0,0,1-96,96H8L104,96V76A52,52,0,0,1,206.3,62.9L232,80Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
      </Icon>
    </Center>
  )
}
