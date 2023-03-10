import { useSelector } from 'react-redux';
// import booksReducer from '../redux/books/booksSlice';
import '../styles/books.css';
import Form from './Form';

const Books = () => {
  const { title, author, category } = useSelector((store) => store.books);
  // const totalBooks = useSelector((store) => store.books.length);
  return (
    <div className="booksDiv">
      <div className="eachBookDiv">
        <div className="eachBook">
          <div className="bookDetails">
            <p className="genre">{category}</p>
            <p className="bookTitle">{title}</p>
            <p>{author}</p>
            <div className="commentRemoveEditDiv">
              <p className="commentRemoveEditEffects">Comments</p>
              <p className="commentRemoveEditEffects">Remove</p>
              <p className="commentRemoveEditEffects">Edit</p>
            </div>
          </div>
          <div className="completedRing">
            <div className="ring">.</div>
            <div>
              <h2 className="percent">64%</h2>
              <span>Completed</span>
            </div>
          </div>
          <div className="currentChapter">
            <div className="line">.</div>
            <div>
              <p className="chapterDetails">CURRENT CHAPTER</p>
              <p className="chapterNumber">Chapter 17</p>
              <button type="button" className="progressButton">UPDATE PROGRESS</button>
            </div>
          </div>
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Books;
