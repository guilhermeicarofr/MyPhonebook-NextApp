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

  list.sort((a, b) => {
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    return 0;
  });
  
  return list;
}

export { useGetAllContacts };
