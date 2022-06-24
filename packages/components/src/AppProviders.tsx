import React from 'react'
import { NativeBaseProvider } from './libs/native-base'
import { SafeAreaProvider } from './libs/safe-area-view'
import { Compose } from './common/Compose'

export * from './libs/fonts'

export interface AppProvidersProps {
  children: React.ReactNode
}

export default function AppProviders(props: AppProvidersProps) {
  return (
    <Compose
      components={[
        (child) => <NativeBaseProvider children={child} />,
        //@ts-ignore
        (child) => <SafeAreaProvider children={child} />,
      ]}
    >
      <>{props.children}</>
    </Compose>
  )
}
