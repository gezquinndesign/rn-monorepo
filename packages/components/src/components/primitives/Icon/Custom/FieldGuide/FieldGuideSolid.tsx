import React from 'react'
import { Icon, Center } from 'native-base'
import { Path, G } from 'react-native-svg'
export const FieldGuideSolid = ({size="md", color="currentColor"}) => {
  return (
    <Center>
      <Icon size={size}
          width="100%"
          height="100%"
          viewBox="0 0 32 32"
          fill="none"
        >
          <Path
            d="M29.55 9.16257L26.65 7.23757C26.1094 5.53071 24.9761 4.07353 23.4548 3.12943C21.9336 2.18532 20.1247 1.81657 18.3553 2.08984C16.5859 2.36311 14.9725 3.26036 13.807 4.61941C12.6414 5.97846 12.0005 7.70965 12 9.50007V11.6501L0.225004 26.3751C0.107548 26.5218 0.0338051 26.6986 0.0122288 26.8853C-0.00934757 27.072 0.0221158 27.2609 0.103012 27.4306C0.183908 27.6002 0.310963 27.7436 0.469612 27.8443C0.628261 27.945 0.812082 27.999 1 28.0001H14C17.4458 27.9935 20.7486 26.6217 23.1851 24.1852C25.6216 21.7486 26.9934 18.4459 27 15.0001V12.5376L29.55 10.8376C29.6893 10.7467 29.8037 10.6225 29.8829 10.4763C29.9621 10.3301 30.0036 10.1664 30.0036 10.0001C30.0036 9.83377 29.9621 9.67009 29.8829 9.52386C29.8037 9.37762 29.6893 9.25345 29.55 9.16257ZM13.7625 17.6376L8.7625 23.6376C8.58477 23.8078 8.35051 23.9065 8.10455 23.9148C7.85859 23.9231 7.6182 23.8404 7.42939 23.6826C7.24059 23.5247 7.11662 23.3028 7.08122 23.0592C7.04581 22.8157 7.10146 22.5676 7.2375 22.3626L12.2375 16.3626C12.3152 16.2454 12.4168 16.1459 12.5356 16.0706C12.6544 15.9954 12.7878 15.946 12.927 15.9258C13.0661 15.9055 13.208 15.9149 13.3433 15.9532C13.4786 15.9915 13.6043 16.058 13.7122 16.1482C13.8201 16.2384 13.9078 16.3503 13.9695 16.4767C14.0312 16.6031 14.0655 16.7411 14.0702 16.8816C14.075 17.0222 14.05 17.1622 13.997 17.2924C13.944 17.4227 13.8641 17.5403 13.7625 17.6376ZM20.5 10.0001C20.2033 10.0001 19.9133 9.9121 19.6666 9.74728C19.42 9.58246 19.2277 9.34819 19.1142 9.0741C19.0007 8.80001 18.9709 8.49841 19.0288 8.20744C19.0867 7.91646 19.2296 7.64919 19.4393 7.43941C19.6491 7.22963 19.9164 7.08677 20.2074 7.02889C20.4983 6.97102 20.7999 7.00072 21.074 7.11425C21.3481 7.22778 21.5824 7.42004 21.7472 7.66672C21.912 7.91339 22 8.2034 22 8.50007C22 8.8979 21.842 9.27943 21.5607 9.56073C21.2794 9.84204 20.8978 10.0001 20.5 10.0001Z"
            fill={color}
          />
      </Icon>
    </Center>
  )
}