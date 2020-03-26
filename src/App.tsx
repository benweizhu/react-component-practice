import React from 'react';
import Button from './components/Button';

import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Button id="myButton" type="primary" name="myButton" disabled className="hello" onClick={() => { console.log('Hello Button') }}>Hello Button</Button>
      </div>
      <br/>
      <div>
        <Button id="myLinkButton" type="primary" target="_blank" href="https://www.google.com" className="hello link" onClick={() => { console.log('Hello Link') }}>Hello Button</Button>
      </div>
    </div>
  );
}

export default App;
