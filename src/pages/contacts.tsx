import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
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
          <SearchInput
            name='search'
            placeholder='Search contact name'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
          />

          <ContactsListBox>
            {list.map((contact: Contact) => <ContactItem key={contact.id} contact={contact} />)}
          </ContactsListBox>

          <Button variant='outlined' onClick={() => setOpenBox(true)}>Create new contact</Button>
          {(openBox)?
            <ModalBox open={openBox} setOpen={setOpenBox}>
              <ContactForm method={'create'} contact={null} setOpen={setOpenBox} />
            </ModalBox>
          : <></>}
        </main>
      </ContactsListContext.Provider>
    </PrivatePage>
  );
}

const ContactsListBox = styled.div`
  width: 300px;
  height: 22rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0px;
  overflow-y: scroll;
`;

const SearchInput = styled.input`
  width: 350px;
  height: 30px;
  margin: 10px 0px;
  outline: none;
  border: transparent;
  border-radius: 10px;
  padding: 0px 10px;
  color: #1C4C71;
`;
