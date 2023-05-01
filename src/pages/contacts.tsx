import { useContext, useEffect, useState } from 'react';

import styles from '@/styles/Home.module.css';
import PrivatePage from '@/components/PrivatePage';
import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import { useGetAllContacts } from '@/hooks/useGetAllContacts';
import { Contact, ContactsList } from '@/models/contactsModels';
import { UserContext } from '@/contexts/UserContext';

export default function ContactsPage() {

  const { userData } = useContext(UserContext);

  const [ list, setList ] = useState([] as ContactsList);
  const [ reload, setReload ] = useState(false);

  useEffect(() => {
    setList(useGetAllContacts(userData));
  }, [ reload ]);

  return (
    <PrivatePage>
      <>
        <Header title={'Contacts'} />
        <main className={styles.main}>
          <h1>Contacts</h1>

          {list.map((contact: Contact) => <h4 key={contact.id}>{contact.name}</h4>)}

          <ContactForm method={'create'} contact={null} reload={reload} setReload={setReload} />

        </main>
      </>
    </PrivatePage>
  );
}
