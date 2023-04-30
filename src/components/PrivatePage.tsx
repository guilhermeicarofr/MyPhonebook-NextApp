import { ReactElement, useContext } from 'react';
import Link from 'next/link';

import styles from '@/styles/Home.module.css';
import { UserContext } from '@/contexts/UserContext';

export default function PrivatePage({ children }: { children: ReactElement }) {
  const { userData } = useContext(UserContext);
  if(userData) return (children);

  return (
    <main className={styles.main}>
      <h1>Unauthorized</h1>
      <h2>You must be Logged In to see this page</h2>
      <button><Link href='/'>Go to LogIn page</Link></button>
    </main>
  )
}
