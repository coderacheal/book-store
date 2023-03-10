import React from 'react';
// import booksReducer from '../redux/books/booksSlice';
import { useSelector } from 'react-redux';
import Book from './Books';
import Form from './Form';

const BooksContainer = () => {
  const { booksList } = useSelector((store) => store.books);

  return (
    <div className="booksDiv">
      {booksList.map((item) => <Book key={item.item_id} {...item} />)}
      <Form />
    </div>
  );
};

export default BooksContainer;
