import React from 'react';
import Dashboard from './pages/Dashboard';
import GlobalStyle from './styles/global';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Dashboard />
      <GlobalStyle/>
    </Router>
  );
}

export default App;
