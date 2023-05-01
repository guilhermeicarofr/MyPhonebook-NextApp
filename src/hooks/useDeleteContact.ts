import { Contact } from '@/models/contactsModels';
import { useGetLocalStorage } from './useGetLocalStorage';
import { useSaveLocalStorage } from './useSaveLocalStorage';

function useDeleteContact(user: string, contact: Contact) {
  const contacts = useGetLocalStorage(user);

  delete contacts[contact.id];

  useSaveLocalStorage(user, contacts);
}

export { useDeleteContact };
