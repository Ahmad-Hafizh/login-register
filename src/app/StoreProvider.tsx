'use client';
// fixed config setup
import { AppStore, makeStore } from '@/lib/redux/store';
import * as React from 'react';
import { Provider } from 'react-redux';

interface IStoreProviderProps {
  children: React.ReactNode;
}

const StoreProvider: React.FunctionComponent<IStoreProviderProps> = ({ children }) => {
  const storeRef = React.useRef<AppStore>();
  if (!storeRef.current) {
    // pemeriksaan apakah store sudah tersedia
    // jika belum mendefine store maka akan dibuat
    // dimanage store yang ada di file store.ts bukan state
    // store provider menghubungkan store dengan data project
    storeRef.current = makeStore();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
