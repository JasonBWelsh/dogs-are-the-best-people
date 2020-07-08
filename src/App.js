import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBreedList, setIsLoading, setIsError } from './redux/breedsSlice.js';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  const URL = 'https://api.TheDogAPI.com/v1/breeds';

  const dispatch = useDispatch();
  const isBreedsLoading = useSelector((state) => state.breeds.isLoading);
  const isBreedsError = useSelector((state) => state.breeds.isError);
  console.log('DRD isBreedsLoading selector:::', isBreedsLoading);

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
        {/* <header className="App-header"><Counter /></header> */}
        {isBreedsLoading && <div>LOADING...</div>}
        {!isBreedsLoading && <div>Loaded!!!</div>}
        {isBreedsError && <div>ERROR ERROR ERROR!!!</div>}
      </div>
    </>
  );
}

export default App;
