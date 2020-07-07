import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBreedList } from './redux/breedsSlice.js';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  const URL = 'https://api.TheDogAPI.com/v1/breeds';

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchBreedData() {
      const response = await axios.get(URL);
      const breeds = response.data;
      console.log(breeds);
      dispatch(setBreedList(breeds));
    }
    fetchBreedData();
  }, [dispatch]);

  return (
    <>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <Counter />
        </header>
      </div>
    </>
  );
}

export default App;
