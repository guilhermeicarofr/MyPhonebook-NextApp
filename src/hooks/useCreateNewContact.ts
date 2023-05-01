import { v4 as uuidv4 } from 'uuid';

import { ContactInfo } from '@/models/contactsModels';
import { useGetLocalStorage } from './useGetLocalStorage';
import { useSaveLocalStorage } from './useSaveLocalStorage';

function useCreateNewContact(user: string, contact: ContactInfo) {
  const contacts = useGetLocalStorage(user);

  const id = uuidv4();
  contacts[id] = { ...contact, id };

  useSaveLocalStorage(user, contacts);
}

export { useCreateNewContact };
