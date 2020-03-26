import React from 'react';
import Button from './components/Button';

import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Button id="myButton" type="primary" name="myButton" className="hello">Hello</Button>
        <Button id="myLinkButton" type="secondary" href="https://www.google.com" className="hello link">Hello Link</Button>
      </div>
    </div>
  );
}

export default App;
