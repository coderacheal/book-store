import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

const initialState = {
  booksList: [],
  status: 'idle',
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        item_id: uuidv4(),
        title: action.payload.title,
        author: action.payload.author,
      };
      return {
        ...state,
        booksList: [...state.booksList, newBook],
      };
    },
    removeBook: (state, { payload }) => ({
      ...state,
      booksList: state.booksList.filter((book) => book.item_id !== payload),
    }),
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
