import React from 'react'
import { Icon, Center } from 'native-base'
import { Path, G } from 'react-native-svg'
export const Speaker = ({ size = 'md', color = 'currentColor' }) => {
  return (
    <Center>
      <Icon
        size={size}
        width="100%"
        height="100%"
        viewBox="0 0 20 20"
        fill="none"
      >
        <Path
          d="M15.4375 7.10539C15.0805 6.77945 14.5552 6.83684 14.2656 7.23844C13.9737 7.63883 14.0258 8.22945 14.3828 8.55797C14.7743 8.9218 15 9.44524 15 9.99992C15 10.5542 14.7743 11.0788 14.3816 11.4402C14.0246 11.7685 13.9725 12.3593 14.2644 12.7597C14.4282 12.9867 14.6679 13.1039 14.9088 13.1039C15.0944 13.1039 15.2821 13.0343 15.4363 12.8927C16.2187 12.1718 16.6666 11.121 16.6666 9.99992C16.6666 8.87883 16.2187 7.82805 15.4375 7.10539ZM17.5382 4.21867C17.1833 3.89273 16.6583 3.9489 16.3653 4.34929C16.0734 4.74969 16.1255 5.34031 16.4814 5.66883C17.6597 6.75383 18.3333 8.33195 18.3333 9.99992C18.3333 11.6679 17.6583 13.2456 16.4823 14.332C16.1264 14.6603 16.0743 15.2511 16.3662 15.6515C16.5311 15.8773 16.7696 15.9945 17.0106 15.9945C17.1972 15.9945 17.3839 15.9249 17.5391 15.7821C19.1041 14.3398 20 12.2304 20 9.99992C20 7.76945 19.1041 5.66008 17.5382 4.21867ZM11.5694 1.36085C11.1701 1.15824 10.701 1.23913 10.3739 1.56628L5.68747 6.24992H2.77775C1.85726 6.24992 1.11108 7.08937 1.11108 8.08977V11.8046C1.11108 12.8402 1.85726 13.6445 2.77775 13.6445H5.68886L10.3729 18.3281C10.5798 18.6406 10.8437 18.7499 11.1111 18.7499C11.2652 18.7499 11.4222 18.7136 11.568 18.6391C11.9687 18.4374 12.2222 17.9921 12.2222 17.4999V2.49992C12.2222 2.00812 11.9687 1.52726 11.5694 1.36085Z"
          fill={color}
        />
      </Icon>
    </Center>
  )
}