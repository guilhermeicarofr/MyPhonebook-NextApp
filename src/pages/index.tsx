import { useContext } from 'react';
import Link from 'next/link'

import styles from '@/styles/Home.module.css'
import { UserContext } from '@/contexts/UserContext';
import Login from '@/components/Login';
import UserInfo from '@/components/UserInfo';
import Header from '@/components/Header';

export default function Home() {
  const { userData } = useContext(UserContext);

  return (
    <>
      <Header title={'Welcome'} />
      <main className={styles.main}>
        <h1>MyAgenda</h1>
        {(userData)?
          <UserInfo /> :
          <Login />
        }
        {(userData)?
          <button><Link href='/contacts'>See my contacts</Link></button> :
          <button disabled>LogIn to see contacts list</button>
        }
      </main>
    </>
  );
}
