import React from 'react';
import { Stack, TextField, Button, Icon } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

export const Example = () => {
  const [isInvalid, setIsInvalid] = React.useState(false);
  return (
    <Stack space={4} w="90%">
      <TextField
        variant="underlined"
        isInvalid={isInvalid}
        helperText="Sample helper text"
        errorMessage="Sample error message"
        placeholder="Default TextField"
        InputLeftElement={
          <Icon
            as={MaterialIcons} 
            name="calendar-today"
            size="md"
            my={3}
            ml={3}
            color="muted.500"
          />
        }
        InputRightElement={
          <Icon as={MaterialIcons} name="cancel" size="md" my={3} mr={3} color="muted.500" />
        }
      />
      <Button onPress={() => setIsInvalid(!isInvalid)}>
        Toggle Invalid State
      </Button>
    </Stack>
  );
};
