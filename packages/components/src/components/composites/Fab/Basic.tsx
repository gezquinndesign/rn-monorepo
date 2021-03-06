import { Fab, Icon, Box } from 'native-base';
import React from 'react';
import { AntDesign } from '../../../libs/vector-icons';

export const Example = () => {
  return (
    <Box position="relative" h={100} w="100%">
      <Fab
        position="absolute"
        size="sm"
        icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
      />
    </Box>
  );
};
