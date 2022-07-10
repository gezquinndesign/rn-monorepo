import React, { useContext } from 'react'
import { NavigationContext } from 'navigation-react'
import {
  StyleSheet,
  // Image,
  // View,
  // FlatList,
  TouchableHighlight,
} from 'react-native'
import {
  FlatList,
  View,
  Accordion,
  Box,
  Flex,
  Text,
  Image,
  Center,
} from 'native-base'
import { CaretCircleRightFill } from '../components/primitives/Icon/Custom'
import { slugify } from '../data/helpers'

export default ({ renderHeader, items, onTimeline, noImages, tab }) => {
  const { stateNavigator, data } = useContext(NavigationContext)

  console.log("ITEMS_DATA",data, tab)

  const DictionaryItem = ({ item, noImages = false }) => {
    const source = item.images && item.images[0] && item.images[0].path
    const id = slugify(item.english || item.scientific)

    // if (!item.english || id === 'australian-pelican') {
    //   console.log('ROGUE', item)
    // }
    // console.log(source)
    const { c0 = '', c1 = '', c2 = '', c3 = '' } = item
    return (
      <TouchableHighlight
        underlayColor="white"
        accessibilityRole={!onTimeline || onTimeline(id) ? 'link' : undefined}
        href={stateNavigator.historyManager.getHref(
          stateNavigator.getNavigationLink('timeline', { id, c0, c1, c2, c3 }),
        )}
        onPress={(e) => {
          if (e.ctrlKey || e.shiftKey || e.metaKey || e.altKey || e.button)
            return
          e.preventDefault()
          if (!onTimeline || onTimeline(id))
            stateNavigator.navigate('timeline', { id, c0, c1, c2, c3 })
        }}
      >
        <Flex
          direction="row"
          align="center"
          justifyContent="space-between"
          py={2}
        >
          <Image
            alt={item.english || 'Unknown'}
            style={styles.logo}
            source={source}
            m={2}
            p={0}
          />
          <Flex
            direction="column"
            w={'100%'}
            h={'100%'}
            flexShrink={1}
            justify="center"
            justifyContent="flex-start"
          >
            <Text pb={1} flexWrap="wrap" fontSize={18} pr={2}>
              {item.english +
                (item.english_alts && item.english_alts.length > 0
                  ? ', ' + (item.english_alts || []).join(', ')
                  : '')}
            </Text>
            <Text pb={1} flexWrap="wrap">
              {item.name.ngarinyin +
                (item.name.gender ? ` (${item.name.gender})` : '') +
                (item.alternatives && item.alternatives.length > 0
                  ? ', ' +
                    (
                      item.alternatives.map(
                        (a) => a.ngarinyin + (a.gender ? ` (${a.gender})` : ''),
                      ) || []
                    ).join(', ')
                  : '')}
            </Text>
          </Flex>
          <Center h={52} w={52} m={0} p={0}>
            <CaretCircleRightFill m={0} p={0} color={"#D67D29"}/>
          </Center>
        </Flex>
      </TouchableHighlight>
    )
  }
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => '' + item.name.replace(/\s/, '')}
      contentInsetAdjustmentBehavior="automatic"
      nestedScrollEnabled={true}
      ListHeaderComponent={renderHeader}
      renderItem={({ item: { collections, name } }) => (
        <View m={0} p={0}>
          {/* <TouchableHighlight
            underlayColor="white"
            accessibilityRole={!onTimeline || onTimeline(accountId) ? 'link' : undefined}
            href={stateNavigator.historyManager.getHref(
              stateNavigator.getNavigationLink('timeline', {id: accountId})
            )}
            onPress={(e) => {
              if (e.ctrlKey || e.shiftKey || e.metaKey || e.altKey || e.button) return
              e.preventDefault()
              if (!onTimeline || onTimeline(accountId))
                stateNavigator.navigate('timeline', {id: accountId});
          }}>
            <Image style={styles.logo} source={logo} />
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="white"
            style={styles.details}
            accessibilityRole="link"
            href={stateNavigator.historyManager.getHref(
              stateNavigator.getNavigationLink('tweet', {id})
            )}
            onPress={(e) => {
              if (e.ctrlKey || e.shiftKey || e.metaKey || e.altKey || e.button) return
              e.preventDefault()
              stateNavigator.navigate('tweet', {id});
          }}>
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text>{text}</Text>
          </View>
        </TouchableHighlight> */}
          {name ? (
            <Text style={styles.heading} uppercase p={3} fontSize={18}>
              {name}
            </Text>
          ) : null}
          <>
            {collections.map((c1) => {
              {
                /* console.log(
                'PATH!',
                !noImages && c1.images && c1.images[0] && c1.images[0].path,
              ) */
              }
              return (
                <Accordion
                  key={c1.name
                    .toLowerCase()
                    .replace(/\s/g, '_')
                    .replace("'", '')}
                  allowMultiple
                >
                  <Accordion.Item m={0}>
                    <Accordion.Summary m={0} p={0} color="#553333">
                      <Flex direction="row" align="center" p={0} m={0}>
                        <Image
                          w={tab!=="fieldguide" ? 0 : '64px'}
                          h={'64px'}
                          m={2}
                          p={0}
                          alt={c1.name}
                          style={styles.logo}
                          source={
                            tab!=="fieldguide"
                              ? null
                              : c1.images && c1.images[0] && c1.images[0].path
                          }
                        />
                        <Text fontSize={18}>{c1.name}</Text>
                      </Flex>
                      <Center h={52} w={52} m={0} p={0}>
                        <Accordion.Icon m={0} p={0} color="#553333" />
                      </Center>
                    </Accordion.Summary>
                    <Accordion.Details m={0} p={0}>
                      {c1.members && c1.members.length > 0
                        ? c1.members.map((m0, i) => (
                            <DictionaryItem
                              key={'m0' + i}
                              item={{ ...m0, c0: name, c1: c1.name }}
                            />
                          ))
                        : c1.collections && c1.collections.length > 0
                        ? c1.collections.map((c2, i) => (
                            <React.Fragment key={'c2' + i}>
                              <Text p={3} fontSize={18}>
                                {c2.name}
                              </Text>
                              {c2.members && c2.members.length > 0
                                ? c2.members.map((m1, i) => (
                                    <DictionaryItem
                                      key={'m1' + i}
                                      item={{
                                        ...m1,
                                        c0: name,
                                        c1: c1.name,
                                        c2: c2.name,
                                      }}
                                    />
                                  ))
                                : c2.collections && c2.collections.length > 0
                                ? c2.collections.map((c3, i) => (
                                    <React.Fragment key={'c3' + i}>
                                      <Text variant="muted" p={3} fontSize={16}>
                                        {c3.name}
                                      </Text>
                                      {c3.members && c3.members.length > 0
                                        ? c3.members.map((m2, i) => (
                                            <DictionaryItem
                                              key={'m2' + i}
                                              item={{
                                                ...m2,
                                                c0: name,
                                                c1: c1.name,
                                                c2: c2.name,
                                                c3: c3.name,
                                              }}
                                            />
                                          ))
                                        : null}
                                    </React.Fragment>
                                  ))
                                : null}
                            </React.Fragment>
                          ))
                        : null}
                    </Accordion.Details>
                  </Accordion.Item>
                </Accordion>
              )
            })}
          </>
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  view: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  heading: {
    textTransform: 'uppercase',
  },
  details: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
  },
  logo: {
    width: 64,
    height: 64,
    borderRadius: 16,
    marginRight: 15,
  },
  text: {
    // flex:'wrap',
    flexDirection: 'row',
    flexGrow: 1,
    color: 'black',
  },
})
