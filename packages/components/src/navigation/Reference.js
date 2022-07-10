import React from 'react'
import { Platform, StyleSheet, ScrollView, View, Image } from 'react-native'
import { StatusBar } from 'navigation-react-native'
import { Box, HStack, Text, Center, Flex } from 'native-base'

import Items from './Items'

const Container = (props) => <View {...props} />

export default ({ items, tab }) => {
  // console.log("tabatha2", tab)
  //   if(tab!==2){
  //     return <Text>NO!</Text>
  //   }
  return (
    <Container
      style={styles.scene}
      collapsable={false}
      contentInsetAdjustmentBehavior="automatic"
    >
      <StatusBar barTintColor="#D67D29" />
      <Box safeAreaTop bg="#D67D29" />
      <HStack
        bg="#D67D29"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        h={88}
        w="100%"
        // maxW="350"
      >
        <HStack alignItems="center">
          <Center ml={'16px'}>
            <Image
              source={{
                uri: Image.resolveAssetSource(
                  require('../assets/images/logo.png'),
                ).uri,
                height: 48,
                width: 48,
                marginLeft: 16,
                marginTop: 20,
                marginBottom: 20,
              }}
            />
          </Center>
          <Flex mx="14px" flexGrow={1}>
            <Center width="100%" alignItems="flex-start">
              {/* TODO: INSET SHADOW  */}
              {/* <Input
                bg="rgba(108, 63, 21, 0.3)"
                color='white'
                fontSize="18px"
                placeholderTextColor="white"
                placeholder="Search phrasebook"
                variant="filled"
                width="100%"
                borderRadius="10"
                py="1"
                height={'48px'}
                borderWidth="0"
                InputLeftElement={
                  <Center ml={'15px'}>
                    <MagnifyingGlass color="white" />
                  </Center>
                }
              /> */}
              <Text color="white" fontSize="20px">
                A guide to Ngarinyin
              </Text>
            </Center>
          </Flex>
        </HStack>
      </HStack>
      <Items items={items} noImages={true} tab="reference" />
    </Container>
  )
}

const styles = StyleSheet.create({
  nav: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'middle',
    height: 88,
    margin: 10,
  },
  leftbar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'middle',
    height: 88,
    backgroundColor: 'green',
  },
  search: {
    borderRadius: 16,
  },
  titleBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 88,
  },
  titleBarText: {
    marginRight: 4,
    fontSize: Platform.OS === 'ios' ? 16 : 20,
  },
  back: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 10,
  },
  color: {
    height: 400,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  text: {
    fontSize: 80,
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'white',
  },
  colors: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  subcolor: {
    width: 100,
    height: 50,
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 10,
  },
})
