/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksList: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state) => {
      state.booksList = [];
    },
    removeBook: (state) => {
      state.booksList = [];
    },
  },
});

export const { addBook, removeBook} = booksSlice.actions;

export default booksSlice;
