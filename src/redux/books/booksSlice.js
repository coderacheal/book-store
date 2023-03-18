import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/1BzfvD0wemkgNcxHqiGj';

const initialState = {
  booksList: [],
  error: null,
};

export const getBooksFromAPI = createAsyncThunk(
  'getBooks', async () => {
    const booksList = await fetch(`${BASE_URL}/books`)
      .then((response) => response.json())
      .catch(() => false);
    return booksList;
  },
);

export const postToAPI = createAsyncThunk(
  'postBooks', (booksObject) => (
    fetch(`${BASE_URL}/books`, {
      method: 'POST',
      body: JSON.stringify(booksObject),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    }).then(() => booksObject)
      .catch(() => false)),
);

export const removeBookFromAPI = createAsyncThunk(
  'removebook', async (bookId) => (
    fetch(`${BASE_URL}/books/${bookId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => bookId)
      .catch(() => false)),
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers(buider) {
    buider
      .addCase(getBooksFromAPI.fulfilled, (state, action) => {
        const books = action.payload;
        const booksArr = Object.keys(books).map((bookId) => ({
          id: bookId,
          ...books[bookId][0],
        }));
        return { ...state, isLoading: false, booksList: booksArr };
      })
      .addCase(postToAPI.fulfilled, (state, action) => {
        const { item_id: id, ...oldBooks } = action.payload;
        const addedBook = {
          id, ...oldBooks,
        };
        state.booksList.push(addedBook);
      })
      .addCase(removeBookFromAPI.fulfilled, (state, action) => {
        const id = action.payload;
        const filteredBooks = state.booksList.filter((book) => (book.id !== id));
        return { ...state, booksList: filteredBooks };
      });
  },
});

export default booksSlice.reducer;
