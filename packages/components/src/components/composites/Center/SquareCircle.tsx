import React from 'react'
import { Circle, Square, Box, HStack, Icon } from 'native-base'
import { MaterialIcons } from '../../../libs/vector-icons';
export function Example() {
  return (
    <HStack space={3}>
      <Circle size="40px" bg="secondary.400">
        <Icon name="audiotrack" as={MaterialIcons} color="white" size={5} />
      </Circle>
      <Square size="40px" bg="primary.400">
        <Box _text={{ fontWeight: 'bold', fontSize: 'lg', color: 'white' }}>
          20
        </Box>
      </Square>
    </HStack>
  )
}
