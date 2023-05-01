import type { AppProps } from 'next/app';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '@/styles/globals.css'
import { UserContext } from '@/contexts/UserContext';

export default function App({ Component, pageProps }: AppProps) {
  const [ userData, setUserData ] = useState('');

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <Component {...pageProps} />
      <ToastContainer />
    </UserContext.Provider>
  );
}
