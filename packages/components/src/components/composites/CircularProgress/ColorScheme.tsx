import React from 'react';
import { CircularProgress, Heading, Center, VStack } from 'native-base';
export const Example = () => {
  return (
    <Center>
      <Heading>Changing the ColorSchemes</Heading>
      <VStack mt={4} alignItems="center" space="lg">
        <CircularProgress value={60} size={100} colorScheme="primary" />
        <CircularProgress value={60} size={100} colorScheme="secondary" />
        <CircularProgress value={60} size={100} colorScheme="emerald" />
      </VStack>
    </Center>
  );
};
