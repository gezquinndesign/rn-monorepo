import React from 'react'
import { Icon, Center } from 'native-base'
import { Path, G } from 'react-native-svg'

export const ReferenceSolid = ({size="md", color="currentColor"}) => {
  return (
    <Center>
      <Icon size={size}
          width="100%"
          height="100%"
          viewBox="0 0 32 32"
          fill="none"
        >
          <Path
            d="M12 26C12.7946 26.0033 13.5558 26.3204 14.1177 26.8823C14.6796 27.4442 14.9967 28.2054 15 29C15 29.2652 15.1054 29.5196 15.2929 29.7071C15.4804 29.8946 15.7348 30 16 30C16.2652 30 16.5196 29.8946 16.7071 29.7071C16.8946 29.5196 17 29.2652 17 29C17.0033 28.2054 17.3204 27.4442 17.8823 26.8823C18.4442 26.3204 19.2054 26.0033 20 26H28C28.5304 26 29.0391 25.7893 29.4142 25.4142C29.7893 25.0391 30 24.5304 30 24V8C30 7.46957 29.7893 6.96086 29.4142 6.58579C29.0391 6.21071 28.5304 6 28 6H22C20.6739 6 19.4021 6.52678 18.4645 7.46447C17.5268 8.40215 17 9.67392 17 11V21C17 21.2652 16.8946 21.5196 16.7071 21.7071C16.5196 21.8946 16.2652 22 16 22C15.7348 22 15.4804 21.8946 15.2929 21.7071C15.1054 21.5196 15 21.2652 15 21V11C15 9.67392 14.4732 8.40215 13.5355 7.46447C12.5979 6.52678 11.3261 6 10 6H4C3.46957 6 2.96086 6.21071 2.58579 6.58579C2.21071 6.96086 2 7.46957 2 8V24C2 24.5304 2.21071 25.0391 2.58579 25.4142C2.96086 25.7893 3.46957 26 4 26H12Z"
            fill={color}
          />
      </Icon>
    </Center>
  )
}