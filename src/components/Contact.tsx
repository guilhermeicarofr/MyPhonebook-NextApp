import { useContext } from 'react';

import { Contact } from '@/models/contactsModels';
import ContactForm from './ContactForm';
import { ContactsListContext } from '@/contexts/ContactsListContext';

export default function ContactItem({ contact }: { contact: Contact }) {
  const { selected, setSelected } = useContext(ContactsListContext);

  return (
    <div>
      <h4>{contact.name}</h4>
      <h4>{contact.phone}</h4>
      {(selected===contact.id)?
        <ContactForm method={'edit'} contact={contact} /> :
        <></>
      }
      {(selected===contact.id)?
        <button onClick={() => setSelected('')}>X</button> :
        <button onClick={() => setSelected(contact.id)}>Edit</button>
      }
    </div>
  );
}
