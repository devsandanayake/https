import React, { useEffect, useState } from 'react';
import axios from 'axios';
import he from './he';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/get')
      .then(res => {
        setMessage(res.data);
      })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {message}
      </header>
      <button> <a href={he}>dd</a></button>
    </div>
  );
}

export default App;