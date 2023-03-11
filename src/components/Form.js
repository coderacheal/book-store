import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  useEffect(() => {
    const titleInput = document.getElementById('book-title');
    const authorInput = document.getElementById('book-author');

    setTitle(titleInput.value);
    setAuthor(authorInput.value);
  }, []);

  const DisplayBook = () => {
    if (title !== '' && author !== '') {
      dispatch(addBook({
        item_id: uuidv4(), title, author, category: '',
      }));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <form className="addBookDiv">
      <div className="addBook">
        <h3>ADD NEW BOOK</h3>
        <input id="book-title" type="text" placeholder="Add a book" value={title} onChange={handleTitleChange} />
        <input id="book-author" type="text" placeholder="Add author" value={author} onChange={handleAuthorChange} />
        <button type="button" className="addBookButton progressButton" onClick={() => DisplayBook()}>ADD BOOK</button>
      </div>
    </form>
  );
};
export default Form;
