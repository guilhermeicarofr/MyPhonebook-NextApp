import { Contact } from '@/models/contactsModels';
import { useGetLocalStorage } from './useGetLocalStorage';
import { useSaveLocalStorage } from './useSaveLocalStorage';

function useUpdateContact(user: string, contact: Contact) {
  const contacts = useGetLocalStorage(user);

  contacts[contact.id] = contact;

  useSaveLocalStorage(user, contacts);
}

export { useUpdateContact };
