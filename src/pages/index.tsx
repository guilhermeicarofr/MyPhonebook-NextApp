import { useContext } from 'react';
import Link from 'next/link';
import PhoneIcon from '@mui/icons-material/Phone';
import Button from '@mui/material/Button';

import styles from '@/styles/Home.module.css'
import { UserContext } from '@/contexts/UserContext';
import Login from '@/components/Login';
import UserInfo from '@/components/UserInfo';
import Header from '@/components/Header';

export default function Home() {
  const { userData } = useContext(UserContext);

  return (
    <>
      <Header title={'MyPhonebook'} />
      <main className={styles.main}>
        <h1><PhoneIcon /> MyPhonebook</h1>
        {(userData)?
          <UserInfo /> :
          <Login />
        }
        {(userData)?
          <Button variant='outlined'><Link href='/contacts'>See my contacts</Link></Button> :
          <Button variant='outlined' disabled>LogIn to see contacts list</Button>
        }
      </main>
    </>
  );
}
