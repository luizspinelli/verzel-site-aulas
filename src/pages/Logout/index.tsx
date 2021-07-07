import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

const Logout: React.FC = () => {
  const { signOut } = useAuth();

  const history = useHistory();

  useEffect(() => {
    signOut();
    history.push('/');
  }, [signOut, history]);
  return <div>Sair</div>;
};

export default Logout;