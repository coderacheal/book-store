/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import '../styles/books.css';

const Books = ({ item_id, title, author, category }) => {
  const dispatch = useDispatch();
  return (
    <div className="eachBookDiv">
      <div className="eachBook">
        <div className="bookDetails">
          <p className="genre">{category}</p>
          <p className="bookTitle">{title}</p>
          <p>{author}</p>
          <div className="commentRemoveEditDiv">
            <p className="commentRemoveEditEffects">Comments</p>
            <button
              type="button"
              className="commentRemoveEditEffects"
              onClick={() => dispatch(removeBook(item_id))}
            >
              Remove
            </button>
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
  );
};

Books.propTypes = {
  // eslint-disable-next-line react/require-default-props
  item_id: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

Books.defaultProps = {
  item_id: '',
};

export default Books;
