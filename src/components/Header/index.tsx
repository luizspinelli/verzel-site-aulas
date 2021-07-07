import React from 'react';
import { Container } from './styles';
import logo from '../../assets/logo.svg';
import {Link} from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="teste-verzel" />
      </Link>
      <div>
        <div>
          <Link to="/signin">
            Entrar
          </Link>
          <Link to="/signup">
            Cadastrar
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default Header;