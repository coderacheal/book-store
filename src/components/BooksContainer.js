import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Books';
import Form from './Form';

const BooksContainer = () => {
  const { booksList } = useSelector((store) => store.books);

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
