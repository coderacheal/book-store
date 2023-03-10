import React from 'react';
// import booksReducer from '../redux/books/booksSlice';
import { useSelector } from 'react-redux';
import Books from './Books';
import Form from './Form';

const BooksContainer = () => {
  const { booksList } = useSelector((store) => store.books);

  return (
    <div className="booksDiv">
      {booksList.map((item) => <Books key={item.item_id} />)}
      <Form />
    </div>
  );
};

export default BooksContainer;
