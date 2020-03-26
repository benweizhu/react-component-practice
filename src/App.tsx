import React from 'react';
import Button from './components/Button';

import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Button id="myButton" type="primary" name="myButton">Hello</Button>
        <Button id="myLinkButton" type="secondary" href="www.baidu.com">Hello Link</Button>
      </div>
    </div>
  );
}

export default App;
