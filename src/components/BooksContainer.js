import React from 'react';
// import booksReducer from '../redux/books/booksSlice';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Book from './Books';
import Form from './Form';

const BooksContainer = () => {
  const { booksList } = useSelector((store) => store.books);

  return (
    <div className="booksDiv">
      {booksList.map((book) => (
        <Book
          key={uuidv4()}
          title={book.title}
          author={book.author}
          item_id={book.item_id}
        />
      ))}
      <Form />
    </div>
  );
};

export default BooksContainer;
