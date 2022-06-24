import React from 'react'
import AppProviders from './AppProviders'
import AppNavigator from './navigation/AppNavigator'

export function App() {
  return (
    <AppProviders>
      <AppNavigator key="app-navigator" />
     </AppProviders>
  )
}
