import { ContactsTable } from '@/models/contactsModels'

function useGetLocalStorage(key: string): ContactsTable {
  const contacts = window.localStorage.getItem(key);
  if(!contacts) return({});
  return JSON.parse(contacts);
}

export { useGetLocalStorage };
