'use client';

import { Provider as ReduxProvider } from 'react-redux';
import { SessionProvider } from 'next-auth/react';
import { store,persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        {children}
        </PersistGate>
      </ReduxProvider>
    </SessionProvider>
  );
}
