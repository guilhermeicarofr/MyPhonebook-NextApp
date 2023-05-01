import { UserCredentials } from '@/models/userModels';

function useEnvFile(): UserCredentials | void {
  const username = process.env.USERNAME;
  const password = process.env.PASSWORD;

  if(!username || !password) return;

  return (
    {
      username,
      password
    }
  );
}

export { useEnvFile };
