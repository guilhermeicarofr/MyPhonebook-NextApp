import { useContext } from 'react';
import styled from 'styled-components';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';

import { UserContext } from '@/contexts/UserContext';

export default function UserInfo() {
  const { userData, setUserData } = useContext(UserContext);

  function logOut() {
    setUserData('');
  }

  return (
    <UserCard>
      <AccountBoxIcon fontSize='large' />
      <strong>{userData}</strong>
      <LogoutIcon onClick={logOut} />
    </UserCard>
  );
}

const UserCard = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;