export type ContactInfo = {
  name: string;
  country: string;
  state: string;
  phone: string;
}

export type Contact = ContactInfo & {
  id: string;
}

export type ContactsList = Contact[];

export type ContactsTable = {
  [ key: string ]: Contact;
}
