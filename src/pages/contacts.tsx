import { useContext, useEffect, useState } from 'react';

import styles from '@/styles/Home.module.css';
import PrivatePage from '@/components/PrivatePage';
import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import { useGetAllContacts } from '@/hooks/useGetAllContacts';
import { Contact, ContactsList } from '@/models/contactsModels';
import { UserContext } from '@/contexts/UserContext';
import ContactItem from '@/components/Contact';
import { ContactsListContext } from '@/contexts/ContactsListContext';

export default function ContactsPage() {

  const { userData } = useContext(UserContext);

  const [ list, setList ] = useState([] as ContactsList);
  const [ reload, setReload ] = useState(false);
  const [ selected, setSelected ] = useState('');

  useEffect(() => {
    setList(useGetAllContacts(userData));
  }, [ reload ]);

  return (
    <PrivatePage>
      <ContactsListContext.Provider value={{ reload, setReload, selected, setSelected }}>
        <Header title={'Contacts'} />
        <main className={styles.main}>

          <h1>Contacts</h1>

          {list.map((contact: Contact) => <ContactItem key={contact.id} contact={contact} />)}

          <ContactForm method={'create'} contact={null} />

        </main>
      </ContactsListContext.Provider>
    </PrivatePage>
  );
}
