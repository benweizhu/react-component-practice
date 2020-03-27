import React from 'react';
import { Router, Link, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";

import InputPage from './pages/InputPage';
import ButtonPage from './pages/ButtonPage';

import './App.css';

function App() {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/input">input</Link>
            </li>
            <li>
              <Link to="/button">button</Link>
            </li>
          </ul>
        </nav>
        <div className="page-container">
          <Switch>
            <Route path="/input">
              <InputPage />
            </Route>
            <Route path="/button">
              <ButtonPage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div></div>
  )
}

export default App;
