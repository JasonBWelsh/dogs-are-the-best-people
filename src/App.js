import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBreedList, setIsLoading, setIsError } from './redux/breedsSlice.js';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
// component imports
import AppBarComponent from './components/AppBar/AppBar.js';
// testing
import { Button, Typography } from '@material-ui/core';

function App() {
  const URL = 'https://api.TheDogAPI.com/v1/breeds';

  const dispatch = useDispatch();
  const isBreedsLoading = useSelector((state) => state.breeds.isLoading);
  const isBreedsError = useSelector((state) => state.breeds.isError);

  useEffect(() => {
    async function fetchBreedData() {
      dispatch(setIsLoading(true));
      try {
        const response = await axios.get(URL);
        const breeds = response.data;
        console.log(breeds);
        dispatch(setBreedList(breeds));
        dispatch(setIsLoading(false));
      } catch (error) {
        console.log(error);
        dispatch(setIsError(true));
      }
    }
    fetchBreedData();
  }, [dispatch]);

  return (
    <>
      <CssBaseline />
      <div className="App">
        <AppBarComponent />
        {isBreedsLoading && <Typography>LOADING...</Typography>}
        {!isBreedsLoading && <Typography>Loaded!!!</Typography>}
        {isBreedsError && <Typography>ERROR ERROR ERROR!!!</Typography>}
        <Button variant={'outlined'}>This is my button</Button>
        <Typography>I am the Typography component</Typography>
      </div>
    </>
  );
}

export default App;
