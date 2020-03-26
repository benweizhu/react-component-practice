import React from 'react';

import { Router, Link, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";

import './App.css';
import InputPage from './pages/InputPage';
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
          </ul>
        </nav>
        <Switch>
          <Route path="/input">
            <InputPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
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
