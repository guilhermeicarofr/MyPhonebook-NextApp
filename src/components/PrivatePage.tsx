import { ReactElement, useContext } from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';

import styles from '@/styles/Home.module.css';
import { UserContext } from '@/contexts/UserContext';

export default function PrivatePage({ children }: { children: ReactElement }) {
  const { userData } = useContext(UserContext);
  if(userData) return (children);

  return (
    <main className={styles.main}>
      <h1>Unauthorized</h1>
      <h2>You must be Logged In to see this page</h2>
      <Button variant='outlined' ><Link href='/'>Go to LogIn page</Link></Button>
    </main>
  )
}
