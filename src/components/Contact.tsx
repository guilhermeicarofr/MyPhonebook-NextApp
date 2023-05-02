import { useState } from 'react';
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditNoteIcon from '@mui/icons-material/EditNote';

import { Contact } from '@/models/contactsModels';
import ContactForm from './ContactForm';
import ModalBox from '@/components/ModalBox';

export default function ContactItem({ contact }: { contact: Contact }) {
  const [ openBox, setOpenBox ] = useState(false);

  return (
    <ContactBox>
      <h3><AccountCircleIcon /> {contact.name}</h3>
      <h4>{contact.country} {contact.state} {contact.phone}</h4>

      <EditIcon onClick={() => setOpenBox(true)} />
      {(openBox)?
        <ModalBox open={openBox} setOpen={setOpenBox}>
          <ContactForm method={'edit'} contact={contact} setOpen={setOpenBox} />
        </ModalBox>
        : <></>}
    </ContactBox>
  );
}

const ContactBox = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  margin-bottom: 5px;
  padding: 5px 10px 10px 10px;
  border-bottom: 1px solid;
  h3 {
    display: flex;
    align-items: center;
  }
  h4 {
    display: flex;
    align-items: center;
    padding: 0px 25px;
  }
`;

const EditIcon = styled(EditNoteIcon)`
  position: absolute;
  top: calc((100%/2) - 12px);
  right: 10px;
`;
