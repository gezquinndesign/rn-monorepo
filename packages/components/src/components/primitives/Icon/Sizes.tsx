import React from 'react';
import { Icon, Heading, Center, VStack } from 'native-base';
import { Ionicons } from '../../../libs/vector-icons';

export const Sizes = () => {
  const sizes = ['10', '50px', '2xl'];
  return (
    <Center>
      <Heading mb="10">Sizes</Heading>
      <VStack space={4} justifyContent="center">
        {sizes.map((size) => (
          <Icon
          key={size}
            as={Ionicons}
            name="md-checkmark-circle"
            alignSelf="center"
            size={size}
          />
        ))}
      </VStack>
    </Center>
  );
};
