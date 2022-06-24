import React from 'react'
import FontSizeComponent from './FontSizeComponent'
import { Box, useColorModeValue } from 'native-base'
const FONT_SIZES: any = {
  '2xs': 10,
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 28,
  '2xl': 36,
  '3xl': 44,
  '4xl': 60,
  '5xl': 72,
  '6xl': 96,
  '7xl': 128,
}

const FontBlocks = ({}) => {
  return (
    <Box bg={useColorModeValue('#f9fafb', '#171E2E')} borderRadius="md" p="4">
      {Object.keys(FONT_SIZES).map((key, index) => (
        <FontSizeComponent
          name={key}
          value={FONT_SIZES[key]}
          key={`space-component-${key}-${index}`}
        />
      ))}
    </Box>
  )
}

export default FontBlocks
