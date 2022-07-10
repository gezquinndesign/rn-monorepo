import React from 'react'
import {
  AboutOutline,
  AboutSolid,
  CaretDown,
  CaretUp,
  CaretLeft,
  CaretRightFill,
  FieldGuideOutline,
  FieldGuideSolid,
  MagnifyingGlass,
  PhrasebookOutline,
  PhrasebookSolid,
  ReferenceOutline,
  ReferenceSolid,
  SpeakerFill,
  Speaker,
} from './Custom'
import { VStack, FlatList, useBreakpointValue, Box, Text } from 'native-base'
export const AllIcons = () => {
  const cols = useBreakpointValue({
    base: 3,
    sm: 4,
    md: 8,
  })
  const icons = [
    {
      icon: <AboutOutline />,
      iconName: 'about-outline',
    },
    {
      icon: <AboutSolid />,
      iconName: 'about-solid',
    },
    {
      icon: <CaretDown />,
      iconName: 'caret-down',
    },
    {
      icon: <CaretUp />,
      iconName: 'caret-up',
    },
    {
      icon: <CaretLeft />,
      iconName: 'caret-left',
    },
    {
      icon: <CaretRightFill />,
      iconName: 'caret-right-fill',
    },
    {
      icon: <FieldGuideOutline />,
      iconName: 'field-guide-outline',
    },
    {
      icon: <FieldGuideSolid />,
      iconName: 'field-guide-solid',
    },
    {
      icon: <MagnifyingGlass />,
      iconName: 'magnifying-glass',
    },
    {
      icon: <PhrasebookOutline />,
      iconName: 'phrasebook-outline',
    },
    {
      icon: <PhrasebookSolid />,
      iconName: 'phrasebook-solid',
    },
    {
      icon: <ReferenceOutline />,
      iconName: 'reference-outline',
    },
    {
      icon: <ReferenceSolid />,
      iconName: 'reference-solid',
    },
    {
      icon: <SpeakerFill />,
      iconName: 'speaker-fill',
    },
    {
      icon: <Speaker />,
      iconName: 'speaker',
    },
  ]
  return (
    <Box w="100%">
      <FlatList
        data={icons}
        renderItem={({ item }) => (
          <VStack
            py="2"
            flex={1}
            space={2}
            my={3}
            mx={2}
            boxSize="76"
            alignItems="center"
          >
            <Box _text={{ textAlign: 'center' }}>{item.icon}</Box>
            <Text textAlign="center">{item.iconName}</Text>
          </VStack>
        )}
        keyExtractor={(item) => item.iconName}
        numColumns={cols}
      />
    </Box>
  )
}
