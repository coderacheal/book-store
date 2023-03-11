import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Books';
import Form from './Form';
import { getBooksFromAPI } from '../redux/books/booksSlice';

const BooksContainer = () => {
  const { booksList } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksFromAPI());
  }, [dispatch]);

  return (
    <div className="booksDiv">
      {booksList.map((book) => (
        <Book
          key={book.id}
          book={book}
        />
      ))}
      <Form />
    </div>
  );
};

export default BooksContainer;
