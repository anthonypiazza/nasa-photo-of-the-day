import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import Photo from './components/Photo.js';

function App() {
// Initialize state to hold the image URL
  const [apod, setApod] = useState();
  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=k89Bsucu73bZRwuwA6f9nbbP7sYsyJPKahIhzpL5&date=2012-03-14')
      .then(res => {
        console.log(res.data.url)
        setApod(res.data.url)
      })
      .catch(err => console.log(err));
  }, []);
  console.log(apod)
  return (
    <div className="App">
      <h1>NASA Photo of the Day</h1>
      <Photo apod={apod} />
    </div>
  );
}

export default App;
