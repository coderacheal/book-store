import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  underconstruction: 'Page Under Construction',
};

const categoriesSlicer = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    notAvailable: (state) => state.underconstruction,
  },
});

export const { notAvailable } = categoriesSlicer.actions;

export default categoriesSlicer.reducer;
