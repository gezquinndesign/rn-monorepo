import React from 'react'
import { Icon, Center } from 'native-base'
import { Path, G } from 'react-native-svg'
export const PhrasebookOutline = ({size="md", color="currentColor"}) => {
  return (
    <Center>
      <Icon size={size}
        width="100%"
        height="100%"
        viewBox="0 0 32 32"
        fill="none"
      >
        <Path
          d="M5.67497 22.1251C4.18608 19.6131 3.66528 16.644 4.21035 13.7753C4.75543 10.9065 6.32888 8.33537 8.63532 6.5445C10.9418 4.75364 13.8226 3.86623 16.7369 4.04888C19.6513 4.23152 22.3988 5.47165 24.4636 7.53646C26.5284 9.60127 27.7685 12.3488 27.9512 15.2631C28.1338 18.1775 27.2464 21.0583 25.4556 23.3647C23.6647 25.6712 21.0935 27.2446 18.2248 27.7897C15.356 28.3348 12.387 27.814 9.87497 26.3251L5.72497 27.5001C5.55494 27.5498 5.37467 27.5529 5.20304 27.509C5.03142 27.4651 4.87476 27.3758 4.7495 27.2506C4.62423 27.1253 4.53497 26.9686 4.49107 26.797C4.44717 26.6254 4.45024 26.4451 4.49997 26.2751L5.67497 22.1251Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="transparent"
        />
        <Path
          d="M12 14H20"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 18H20"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Icon>
    </Center>
  )
}
