import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  underconstruction: [],
};

const categoriesSlicer = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: () => ['Page Under Construction'],
  },
});

export const { checkStatus } = categoriesSlicer.actions;

export default categoriesSlicer.reducer;
