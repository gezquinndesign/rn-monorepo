import React from 'react'
import { NativeBaseProvider } from './libs/native-base'
import { Compose } from './common/Compose'

export interface AppProvidersProps {
  children: React.ReactNode
}

export function AppProviders(props: AppProvidersProps) {
  return (
    <Compose
      components={[
        (child) => <NativeBaseProvider children={child} />,
      ]}
    >
      <>
        {props.children}
      </>
    </Compose>
  )
}
