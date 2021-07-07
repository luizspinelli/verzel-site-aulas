import React from 'react';
import { Container } from './styles';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

const Header: React.FC = () => {
  const { user } = useAuth();
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="teste-verzel" />
      </Link>
      <div>
        {
          user ?
            <div>
              <p>
                {user.username}
              </p>
              <Link to="/logout">
                Sair
              </Link>
            </div>

            :
            <div>
              <Link to="/signin">
                Entrar
              </Link>
              <Link to="/signup">
                Cadastrar
              </Link>
            </div>

        }
      </div>

    </Container>
  )
}

export default Header;