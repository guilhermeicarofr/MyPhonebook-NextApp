import { useContext } from 'react';

import { UserContext } from '@/contexts/UserContext';

export default function UserInfo() {
  const { userData, setUserData } = useContext(UserContext);

  function logOut() {
    setUserData('');
  }

  return (
    <div>
      <h2>{`User: ${userData}`}</h2>
      <button onClick={logOut}>LogOut</button>
    </div>
  );
}
