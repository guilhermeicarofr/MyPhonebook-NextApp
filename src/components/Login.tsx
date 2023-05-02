import { FormEvent, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import Button from '@mui/material/Button';

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
      toast.error('Invalid Credentials');
      return;
    } 
    setUserData(username);
  }

  return (
    <FormBox onSubmit={submitLogin}>
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
      <Button onClick={submitLogin} variant='outlined'>LogIn</Button>
    </FormBox>
  );
}

const FormBox = styled.form`
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 100%;
    height: 40px;
    padding: 0px 10px;
    outline: none;
    border: transparent;
    border-radius: 5px;
    color: #1C4C71;
    margin-bottom: 2px;
  }
  Button {
    margin-top: 10px;
  }
`;
