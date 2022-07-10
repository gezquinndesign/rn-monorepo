import React from 'react'
import { Icon, Center } from 'native-base'
import { Path, G } from 'react-native-svg'
export const ReferenceOutline = ({size="md", color="currentColor"}) => {
  return (
    <Center>
      <Icon size={size} width="100%"
          height="100%"
          viewBox="0 0 30 30"
          fill="none"
        >
          <Path
            d="M15 10.3125C15 9.31794 15.3951 8.36411 16.0984 7.66085C16.8016 6.95759 17.7554 6.5625 18.75 6.5625H26.25C26.4986 6.5625 26.7371 6.66127 26.9129 6.83709C27.0887 7.0129 27.1875 7.25136 27.1875 7.5V22.5C27.1875 22.7486 27.0887 22.9871 26.9129 23.1629C26.7371 23.3387 26.4986 23.4375 26.25 23.4375H18.75C17.7554 23.4375 16.8016 23.8326 16.0984 24.5359C15.3951 25.2391 15 26.1929 15 27.1875"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="transparent"
          />
          <Path
            d="M2.8125 22.5C2.8125 22.7486 2.91127 22.9871 3.08709 23.1629C3.2629 23.3387 3.50136 23.4375 3.75 23.4375H11.25C12.2446 23.4375 13.1984 23.8326 13.9017 24.5359C14.6049 25.2391 15 26.1929 15 27.1875V10.3125C15 9.31794 14.6049 8.36411 13.9017 7.66085C13.1984 6.95759 12.2446 6.5625 11.25 6.5625H3.75C3.50136 6.5625 3.2629 6.66127 3.08709 6.83709C2.91127 7.0129 2.8125 7.25136 2.8125 7.5V22.5Z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="transparent"
          />
      </Icon>
    </Center>
  )
}
