import React from 'react';
import { Container } from './styles';
import logo from '../../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <a href="/">
        <img src={logo} alt="teste-verzel" />
      </a>
      <div>
        <div>
          <a href="/signin">
            Entrar
          </a>
          <a href="/signin">
            Cadastrar
          </a>
        </div>
      </div>
    </Container>
  )
}

export default Header;