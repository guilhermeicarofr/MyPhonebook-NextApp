import { ContactsTable } from '@/models/contactsModels'

function useSaveLocalStorage(key: string, contacts: ContactsTable) {
  window.localStorage.setItem(key, JSON.stringify(contacts));
}

export { useSaveLocalStorage };
