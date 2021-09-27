import React from 'react';
import { Router } from '../Route';
import { AppProvider } from '../../services/context';

export function App(): JSX.Element {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  )
}
