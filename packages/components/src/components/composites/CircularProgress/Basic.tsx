import React from 'react';
import { CircularProgress, Heading, Center } from 'native-base';
import { number } from '@storybook/addon-knobs';

export const Example = () => {
  return (
    <Center>
      <Heading mb={6}>Default CircularProgress</Heading>
      <CircularProgress value={60}     
                size={100}
        />
    </Center>
  );
};
