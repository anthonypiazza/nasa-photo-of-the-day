import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import Photo from './components/Photo.js';
import Title from './components/Title.js';

function App() {

  // Initialize state to hold the image URL
  const [apodData, setApodData] = useState();
  // const [apodTitle, setApodTitle] = useState();
  
  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=k89Bsucu73bZRwuwA6f9nbbP7sYsyJPKahIhzpL5&date=2012-03-14')
      .then(res => {
        console.log(res.data);
        setApodData(res.data);
        // setApodTitle(res.data.title);
      })
      .catch(err => console.log(err));
  }, []);
  
  // console.log(apodTitle)
  if (!apodData) return <div>Loading...</div>
  return (
    <div className="App">
      <h1>NASA Photo of the Day</h1>
      <Title apodData={apodData} />
      <Photo apodData={apodData} />
    </div>
  );
}

export default App;
