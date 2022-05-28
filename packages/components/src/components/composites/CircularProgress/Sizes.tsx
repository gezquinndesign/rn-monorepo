import React from 'react';
import { CircularProgress, Heading, Center, VStack } from 'native-base';
export const Example = () => {
  return (
    <Center>
      <Heading>Changing the sizes</Heading>
      <VStack alignItems="center">
        <CircularProgress mt={6} value={60} size={100} />
        <CircularProgress mt={6} value={60} size={200} />
        <CircularProgress mt={6} value={60} size={300} />
      </VStack>
    </Center>
  );
};
