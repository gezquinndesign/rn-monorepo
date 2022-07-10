import React from 'react'
import { Icon, Center } from 'native-base'
import { Path, G } from 'react-native-svg'
export const AboutOutline = ({size="md", color="currentColor"}) => {
  return (
    <Center>
      <Icon
      size={size}
          width="100%"
          height="100%"
          viewBox="0 0 30 30"
          fill="none"
        >
          <Path
            d="M15 26.25C21.2132 26.25 26.25 21.2132 26.25 15C26.25 8.7868 21.2132 3.75 15 3.75C8.7868 3.75 3.75 8.7868 3.75 15C3.75 21.2132 8.7868 26.25 15 26.25Z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="transparent"
            />
          <Path
            d="M15 22.5C15.7767 22.5 16.4062 21.8704 16.4062 21.0938C16.4062 20.3171 15.7767 19.6875 15 19.6875C14.2233 19.6875 13.5938 20.3171 13.5938 21.0938C13.5938 21.8704 14.2233 22.5 15 22.5Z"
            fill={color}
            />
          <Path
            d="M15 16.875V15.9375C15.649 15.9375 16.2834 15.7451 16.823 15.3845C17.3626 15.024 17.7831 14.5115 18.0315 13.9119C18.2798 13.3124 18.3448 12.6526 18.2182 12.0161C18.0916 11.3796 17.7791 10.7949 17.3202 10.3361C16.8613 9.87717 16.2766 9.56466 15.6401 9.43805C15.0036 9.31144 14.3439 9.37642 13.7443 9.62477C13.1448 9.87312 12.6323 10.2937 12.2717 10.8333C11.9112 11.3729 11.7188 12.0073 11.7188 12.6563"
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
