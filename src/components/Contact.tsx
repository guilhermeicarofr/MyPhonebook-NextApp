import { useState } from 'react';

import { Contact } from '@/models/contactsModels';
import ContactForm from './ContactForm';
import ModalBox from '@/components/ModalBox';

export default function ContactItem({ contact }: { contact: Contact }) {
  const [ openBox, setOpenBox ] = useState(false);

  return (
    <div>
      <h4>{contact.name}</h4>
      <h4>{contact.phone}</h4>

      {(openBox)?
        <ModalBox open={openBox} setOpen={setOpenBox}>
          <ContactForm method={'edit'} contact={contact} setOpen={setOpenBox} />
        </ModalBox>
        : <></>}
      <button onClick={() => setOpenBox(true)}>Edit</button>
    </div>
  );
}
