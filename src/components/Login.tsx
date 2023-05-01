import { FormEvent, useContext, useState } from 'react';
import { toast } from 'react-toastify';

import { UserContext } from '@/contexts/UserContext';
import { useLogin } from '@/hooks/useLogin';

export default function Login() {
  const { setUserData } = useContext(UserContext);

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  function submitLogin(e: FormEvent) {
    e.preventDefault();
    if(!setUserData) return;

    if(!useLogin({ username, password })) {
      toast('Invalid Credentials');
      return;
    } 
    setUserData(username);
  }

  return (
    <div>
      <form onSubmit={submitLogin}>
        <input
          name='username'
          placeholder='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          required
        />
        <input
          name='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
        />
        <button>LogIn</button>
      </form>
    </div>
  );
}
