import { createSlice } from '@reduxjs/toolkit';

export const breedsSlice = createSlice({
  name: 'breeds',
  initialState: {
    breeds: [],
    drd: 1812,
  },
  reducers: {
    setBreedList: (state, action) => {
      console.log('DRD __ inside  `setBreedList` reducer');
      state.breeds = action.payload;
    },
  },
});

export const { setBreedList } = breedsSlice.actions;

export default breedsSlice.reducer;
