import React from 'react';
import './scss/layout.scss';
import { ThemeProvider } from 'styled-components';
import { theme } from './config/style';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Accounts from './components/Accounts/Accounts';
import Transactions from './components/Transactions/Transactions';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="main-container">
        <Router>
          <Route exact path="/">
            <Accounts />
          </Route>
          <Route exact path="/transactions/:id/:account">
            <Transactions />
          </Route>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
