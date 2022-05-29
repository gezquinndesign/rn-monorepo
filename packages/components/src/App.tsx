import React from 'react'
import { AppNavigator } from './navigation/AppNavigator'
import { AppProviders } from './AppProviders'

export function App() {
  return (
    <>
      <AppProviders>
        <AppNavigator key="app-navigator" />
      </AppProviders>
    </>
  )
}
