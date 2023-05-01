import { FormEvent, useContext, useState } from 'react';

import { UserContext } from '@/contexts/UserContext';
import { useCreateNewContact } from '@/hooks/useCreateNewContact';
import { Contact } from '@/models/contactsModels';
import { ContactsListContext } from '@/contexts/ContactsListContext';
import { useUpdateContact } from '@/hooks/useUpdateContact';

export default function ContactForm({ method, contact }: { method: string, contact: Contact | null }) {
  const { userData } = useContext(UserContext);
  const { reload, setReload, setSelected } = useContext(ContactsListContext);

  let id = '';
  let name = '';
  let country = '';
  let state = '';
  let phone = '';
  if(method === 'edit' && contact) {
    id = contact.id;
    name = contact.name;
    country = contact.country;
    state = contact.state;
    phone = contact.phone;
  }

  const [ newName, setNewName ] = useState(name);
  const [ newCountry, setNewCountry ] = useState(country);
  const [ newState, setNewState ] = useState(state);
  const [ newPhone, setNewPhone ] = useState(phone);

  function submitContactForm(e: FormEvent) {
    e.preventDefault();

    if(method === 'edit') {
      useUpdateContact(userData, {
        id,
        name: newName,
        country: newCountry,
        state: newState,
        phone: newPhone
      });
      setSelected('');
      setReload(!reload);
    }
    if(method === 'create') {
      useCreateNewContact(userData, {
        name: newName,
        country: newCountry,
        state: newState,
        phone: newPhone
      });
      setSelected('');
      setReload(!reload);
    }
  }

  return (
    <div>
      <form onSubmit={submitContactForm}>
        <input
          name='newName'
          placeholder='New name'
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          type="text"
          required
        />
        <input
          name='newCountry'
          placeholder='New country code'
          value={newCountry}
          onChange={(e) => setNewCountry(e.target.value)}
          type="text"
          required
        />
        <input
          name='newState'
          placeholder='New state code'
          value={newState}
          onChange={(e) => setNewState(e.target.value)}
          type="text"
          required
        />
        <input
          name='newPhone'
          placeholder='New phone number'
          value={newPhone}
          onChange={(e) => setNewPhone(e.target.value)}
          type="text"
          required
        />
        <button>Save contact</button>
      </form>
    </div>
  );
}
