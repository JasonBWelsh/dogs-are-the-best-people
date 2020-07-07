import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import breedsReducer from '../redux/breedsSlice.js';

export default configureStore({
  reducer: {
    counter: counterReducer,
    breeds: breedsReducer,
  },
});
