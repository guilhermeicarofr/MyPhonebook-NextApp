import { UserCredentials } from '@/models/userModels';
import { useEnvFile } from './useEnvFile';

function useLogin({ username, password }: UserCredentials): boolean {
  const credentials = useEnvFile();
  if(!credentials) return false;

  if(username !== credentials.username || password !== credentials.password) return false;

  return true;
}

export { useLogin };
