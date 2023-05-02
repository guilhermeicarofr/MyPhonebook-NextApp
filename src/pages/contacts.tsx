import { useContext, useEffect, useState } from 'react';
import Button from '@mui/material/Button';

import styles from '@/styles/Home.module.css';
import PrivatePage from '@/components/PrivatePage';
import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import { useGetAllContacts } from '@/hooks/useGetAllContacts';
import { Contact, ContactsList } from '@/models/contactsModels';
import { UserContext } from '@/contexts/UserContext';
import ContactItem from '@/components/Contact';
import { ContactsListContext } from '@/contexts/ContactsListContext';
import ModalBox from '@/components/ModalBox';

export default function ContactsPage() {
  const { userData } = useContext(UserContext);

  const [ list, setList ] = useState([] as ContactsList);
  const [ reload, setReload ] = useState(false);
  const [ search, setSearch ] = useState('');
  const [ openBox, setOpenBox ] = useState(false);

  useEffect(() => {
    setList(useGetAllContacts(userData, search));
  }, [ reload, userData, search ]);

  return (
    <PrivatePage>
      <ContactsListContext.Provider value={{ reload, setReload }}>
        <Header title={'Contacts'} />
        <main className={styles.main}>
          <h1>Contacts</h1>
          
          <input
            name='search'
            placeholder='Search contact name'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
          />

          {list.map((contact: Contact) => <ContactItem key={contact.id} contact={contact} />)}

          {(openBox)?
            <ModalBox open={openBox} setOpen={setOpenBox}>
              <ContactForm method={'create'} contact={null} setOpen={setOpenBox} />
            </ModalBox>
          : <></>}

          <Button onClick={() => setOpenBox(true)}>Create new contact</Button>
        </main>
      </ContactsListContext.Provider>
    </PrivatePage>
  );
}
