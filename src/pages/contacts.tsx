import { Inter } from 'next/font/google';

import styles from '@/styles/Home.module.css';
import PrivatePage from '@/components/PrivatePage';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] })

export default function ContactsPage() {

  return (
    <PrivatePage>
      <>
        <Header title={'Contacts'} />
        <main className={styles.main}>
          <h1>Contacts</h1>
        </main>
      </>
    </PrivatePage>
  );
}
