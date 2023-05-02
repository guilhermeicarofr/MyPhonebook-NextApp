import { Dispatch, FormEvent, SetStateAction, useContext, useState } from 'react';
import { toast } from 'react-toastify';

import { UserContext } from '@/contexts/UserContext';
import { useCreateNewContact } from '@/hooks/useCreateNewContact';
import { Contact } from '@/models/contactsModels';
import { ContactsListContext } from '@/contexts/ContactsListContext';
import { useUpdateContact } from '@/hooks/useUpdateContact';
import { useDeleteContact } from '@/hooks/useDeleteContact';
import { useValidateForm } from '@/hooks/useValidateForm';

export default function ContactForm(
  { method, contact, setOpen }:
  { method: string, contact: Contact | null, setOpen:Dispatch<SetStateAction<boolean>> }) {

  const { userData } = useContext(UserContext);
  const { reload, setReload } = useContext(ContactsListContext);

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

    const formInput = {
      name: newName,
      country: newCountry,
      state: newState,
      phone: newPhone
    };

    const { valid, errors } = useValidateForm(formInput);
    if(!valid) {
      let errorMessage = 'Invalid Input: ';

      if(errors.name) errorMessage += errors.name;
      if(errors.country) errorMessage += errors.country;
      if(errors.state) errorMessage += errors.state;
      if(errors.phone) errorMessage += errors.phone;

      toast.error(errorMessage);
      return;
    }

    if(method === 'edit') {
      useUpdateContact(userData, {
        ...formInput, id
      });
      setOpen(false);
      setReload(!reload);
    }
    if(method === 'create') {
      useCreateNewContact(userData, formInput);
      setNewName('');
      setNewCountry('');
      setNewState('');
      setNewPhone('');

      setOpen(false);
      setReload(!reload);
    }
  }

  function deleteContact() {
    if(method === 'edit' && contact) {
      if(!confirm(`Do you want to delete contact: ${contact.name}?`)) return;
      useDeleteContact(userData, contact);

      toast.success(`Contact ${contact.name} deleted.`);
      setOpen(false);
      setReload(!reload);
    }
  }

  return (
    <>
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
      {(method==='edit')? <button onClick={deleteContact}>Delete</button> : <></>}
    </>
  );
}
