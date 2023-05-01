import { ContactInfo } from '@/models/contactsModels';

function useValidateForm(form: ContactInfo) {
  const { name, country, state, phone } = form;
  const errors = { name: '', country: '', state: '', phone: '' } as ContactInfo;
  let valid = true;

  if(!name) errors.name = 'Name cannot be empty. ';

  if(!country) errors.country = 'Country cannot be empty. ';
  else if(country[0] !== '+') errors.country = 'Country must start with +. ';
  else if(isNaN(Number(country.slice(1)))) errors.country = 'Country must be numerical. ';
  else if(country.length < 2) errors.country = 'Country must be at least 2 digits. ';

  if(!state) errors.state = 'State cannot be empty. ';
  else if(state.length !== 2) errors.state = 'State must be 2 digits. ';
  else if(isNaN(Number(state))) errors.state = 'State must be numerical. ';

  if(!phone) errors.phone = 'Phone cannot be empty. ';
  else if(phone.length < 8) errors.phone = 'Phone must be at least 8 digits. ';
  else if(isNaN(Number(state))) errors.phone = 'Phone must be numerical. ';

  if(errors.name) valid = false;
  if(errors.country) valid = false;
  if(errors.state) valid = false;
  if(errors.phone) valid = false;
  return { valid, errors };
}

export { useValidateForm };
