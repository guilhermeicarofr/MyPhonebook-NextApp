import { ContactsList } from '@/models/contactsModels';
import { useGetLocalStorage } from './useGetLocalStorage';

function useGetAllContacts(user: string, search: string) {
  const table = useGetLocalStorage(user);
  let list = [] as ContactsList;
  for(const id in table) {
    list.push(table[id]);
  }

  if(search) {
    list = list.filter((contact) => {
      return (search === contact.name.substring(0, (search.length)));
    });
  }
  
  return list;
}

export { useGetAllContacts };
