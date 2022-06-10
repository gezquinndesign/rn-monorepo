import React from 'react';
import { Icon, Center, HStack } from 'native-base';
import { MaterialCommunityIcons } from '../../../libs/vector-icons';
import { Entypo } from '../../../libs/vector-icons';
import { AntDesign } from '../../../libs/vector-icons';

export const Example = () => {
  return (
    <Center>
      <HStack space={3}>
        <Icon
          as={AntDesign}
          name="android1"
          color="coolGray.800"
          _dark={{ color: 'warmGray.50' }}
        />
        <Icon
          as={Entypo}
          name="app-store"
          color="coolGray.800"
          _dark={{ color: 'warmGray.50' }}
        />
        <Icon
          as={MaterialCommunityIcons}
          name="web"
          color="coolGray.800"
          _dark={{ color: 'warmGray.50' }}
        />
      </HStack>
    </Center>
  );
};
