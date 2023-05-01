import { ContactsList } from '@/models/contactsModels';
import { useGetLocalStorage } from './useGetLocalStorage';

function useGetAllContacts(user: string) {
  const table = useGetLocalStorage(user);

  const list = [] as ContactsList;
  for(const id in table) {
    list.push(table[id]);
  }
  
  return list;
}

export { useGetAllContacts };
