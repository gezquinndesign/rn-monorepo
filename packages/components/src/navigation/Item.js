import React, { useContext, useState } from 'react'
import {
  StyleSheet,
  Platform,
  View,
  Animated,
  Image,
  TouchableHighlight,
} from 'react-native'
import { NavigationContext } from 'navigation-react'
import {
  NavigationBar,
  CoordinatorLayout,
  CollapsingBar,
  useNavigated,
} from 'navigation-react-native'
import Items from './Items'
import { getItem } from '../data/helpers'
import { Flex, Text, Center, Box } from 'native-base'
import { SpeakerFill } from '../components/primitives/Icon/Custom'

export default () => {
  const { stateNavigator, data } = useContext(NavigationContext)
  const { id, c0, c1, c2, c3 } = data
  const { english, english_alts, scientific, alternatives, name } = getItem(
    id,
    c0,
    c1,
    c2,
    c3,
  )
  const [offset] = useState(new Animated.Value(0))
  const scale = offset.interpolate({
    inputRange: [-64, 0],
    outputRange: [0.8, 1],
  })
  useNavigated(() => {
    if (Platform.OS === 'web') document.title = english
  })

  // console.log('ALTS', alternatives)

  const Pronouncable = ({ item }) => {
    // console.log('ITEM', item)
    const { ngarinyin, gender, syllables } = item
    return (
      <Flex
        direction="row"
        align="center"
        justifyContent="space-between"
        py={2}
      
      >
        <Flex
          direction="column"
          w={'100%'}
          flexShrink={1}
          justify="center"
          justifyContent="flex-start"
        
        >
          <Text pb={1} flexWrap="wrap" fontSize={18}>
            {ngarinyin + (gender ? ` (${gender})` : '')}
          </Text>
          <Text italic pb={1} flexWrap="wrap" pr={2}>
            {'(' + syllables + ')'}
          </Text>
        </Flex>
        {/* <TouchableHighlight
          underlayColor="transparent"
          onPress={(e) => {
            if (e.ctrlKey || e.shiftKey || e.metaKey || e.altKey || e.button)
              return
            e.preventDefault()
            // PLAY SOUND
          }}
        > */}
        <Center h={52} w={52} m={0} p={0}>
          <SpeakerFill m={0} p={0} />
        </Center>
        {/* </TouchableHighlight> */}
      </Flex>
    )
  }

  return (
    <>
      <NavigationBar
        title={english}
        onOffsetChanged={Animated.event([{ nativeEvent: { offset } }], {
          useNativeDriver: Platform.OS !== 'web',
        })}
        navigationImage={{
          uri: Image.resolveAssetSource(
            require('../assets/icons/caret-left.png'),
          ).uri,
          height: 25,
          width: 25,
          margin: 0,
          padding: 0,
        }}
        barTintColor={Platform.OS === 'android' ? 'orange' : '#fff'}
        tintColor={
          Platform.OS === 'android'
            ? '#fff'
            : Platform.OS !== 'web'
            ? null
            : 'deepskyblue'
        }
        titleColor={Platform.OS === 'android' ? '#fff' : null}
        navigationHref={stateNavigator.historyManager.getHref(
          stateNavigator.getNavigationBackLink(1),
        )}
        style={{ height: 120 }}
        onNavigationPress={() => stateNavigator.navigateBack(1)}
      />
      <Flex
        direction="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        p={3}
      >
        <Flex direction="row" alignItems="flex-end" flexGrow={1}>
          {english_alts && english_alts.length > 0 ? (
            <>
              <Text>also </Text>
              {english_alts.map((ea, i) => (
                <Text bold key={'ea' + i}>
                  {ea}
                </Text>
              ))}
            </>
          ) : null}
        </Flex>
        <Text italic>{scientific}</Text>
        <Flex w="100%" h="100%" direction="column" alignItems="flex-start">
          {[name || []].concat(alternatives || []).map((item, i) => (
            <Pronouncable key={'item' + i} item={item} />
          ))}
        </Flex>
      </Flex>
    </>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 85,
    height: 85,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: 'white',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 5,
    marginBottom: 2,
  },
  bio: {
    marginTop: 10,
    marginBottom: 10,
  },
  interactions: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccd6dd',
    paddingTop: 12,
    paddingBottom: 12,
  },
  count: {
    fontWeight: 'bold',
    fontSize: 13,
    marginRight: 5,
  },
  interaction: {
    color: '#657786',
    fontSize: 13,
    marginRight: 10,
  },
})
