import React from 'react'
import { Box, Heading, Center, Text } from 'native-base'

// const Home = () => {
//   return (
//     <Center>
//       <Box bg="green">
//         <Text fontSize="6xl" color="white" textAlign="center" fontFamily="heading">
//           Coming soon...
//         </Text>
//         <Text color="white" textAlign="center" fontFamily="body">
//           Explore your dreams
//         </Text>
//       </Box>
//     </Center>
//   )
// }

// export { Home }
import { StyleSheet, View } from 'react-native'
import { Screen } from '../../components/common/Screen'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
})

export const Home = React.memo(() => {
  return (
    <>
      {/* <AppKeyboardShortcuts /> */}

      <Screen
        statusBarBackgroundThemeColor="transparent"
        enableSafeArea={true}
      >
        {/* <AppBannerMessage /> */}

        <View
          style={[
            styles.container,
            // {
            //   flexDirection:
            //     appOrientation === 'portrait' ? 'column-reverse' : 'row',
            // },
          ]}
        >
          <Center>
            <Box bg="green">
              <Text
                fontSize="6xl"
                color="white"
                textAlign="center"
                fontFamily="heading"
              >
                Coming soon...
              </Text>
              <Text color="white" textAlign="center" fontFamily="body">
                Explore your dreams
              </Text>
            </Box>
          </Center>
        </View>
      </Screen>
    </>
  )
})

Home.displayName = 'Home'
