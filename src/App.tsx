import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Routes from './routes';
import AppContext from './hooks';

function App() {
  return (
    <Router>
      <AppContext>
        <Routes />
      </AppContext>
      <GlobalStyle />
    </Router>
  );
}

export default App;
