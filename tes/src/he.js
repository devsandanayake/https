import React, { useEffect, useState } from 'react';
import axios from 'axios';
 

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/get')
      .then(res => {
        setMessage(res.data);
      })
  }, []);

  const handleClick = (x) => {
    axios.post(`/get/${x}`)
      .then(res => {
        setMessage(res.data);
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        {message}
      </header>

      <button onClick={() => handleClick('200 hello devin')}>Click me</button>
      <a href="/gets">nex</a>
       {/* Replace 'someValue' with the value you want to pass */}
    </div>
  );
}

export default App;