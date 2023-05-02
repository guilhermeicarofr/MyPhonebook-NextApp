import { Dispatch, FormEvent, SetStateAction, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { UserContext } from '@/contexts/UserContext';
import { useCreateNewContact } from '@/hooks/useCreateNewContact';
import { Contact } from '@/models/contactsModels';
import { ContactsListContext } from '@/contexts/ContactsListContext';
import { useUpdateContact } from '@/hooks/useUpdateContact';
import { useDeleteContact } from '@/hooks/useDeleteContact';
import { useValidateForm } from '@/hooks/useValidateForm';
import styled from 'styled-components';

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
    <ContactFormBox>
      <form onSubmit={submitContactForm}>
        <input
          name='newName'
          placeholder='Name'
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          type="text"
          required
        />
        <input
          name='newCountry'
          placeholder='Country code'
          value={newCountry}
          onChange={(e) => setNewCountry(e.target.value)}
          type="text"
          required
        />
        <input
          name='newState'
          placeholder='State code'
          value={newState}
          onChange={(e) => setNewState(e.target.value)}
          type="text"
          required
        />
        <input
          name='newPhone'
          placeholder='Phone number'
          value={newPhone}
          onChange={(e) => setNewPhone(e.target.value)}
          type="text"
          required
        />
      </form>
      <Button variant='outlined' size='small' onClick={submitContactForm}>Save contact</Button>
      {(method==='edit')? <DeleteIcon onClick={deleteContact} /> : <></>}
    </ContactFormBox>
  );
}


const ContactFormBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 100%;
    height: 30px;
    outline: none;
    border: 1px solid #1C4C71;
    border-radius: 10px;
    padding: 0px 10px;
    color: #1C4C71;
  }
  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
  }
`;

const DeleteIcon = styled(DeleteOutlineIcon)`
  position: absolute;
  bottom: 3px;
  right: 5px;
  color: #1C4C71;
`;
