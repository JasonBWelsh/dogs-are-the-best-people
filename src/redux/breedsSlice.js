import { createSlice } from '@reduxjs/toolkit';

export const breedsSlice = createSlice({
  name: 'breeds',
  initialState: {
    breeds: [],
    isLoading: false,
    isError: false,
    drd: 1812,
  },
  reducers: {
    setBreedList: (state, action) => {
      state.breeds = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsError: (state, action) => {
      state.isError = action.payload;
    },
  },
});

export const { setBreedList, setIsLoading, setIsError } = breedsSlice.actions;

export default breedsSlice.reducer;
