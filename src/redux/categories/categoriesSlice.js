import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  underconstruction: [],
};

const categoriesSlicer = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    notAvailable: (state) => 'Under Construction',
  },
});

export const { notAvailable } = categoriesSlicer.actions;

export default categoriesSlicer.reducer;
