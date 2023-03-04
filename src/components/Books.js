import '../styles/books.css';

const Books = () => (
  <div className="booksDiv">
    <div className="eachBookDiv">
      <div className="eachBook">
        <div className="bookDetails">
          <p className="genre">Action</p>
          <h2 className="bookTitle">The Hunger Games</h2>
          <p>Susanne Collins</p>
          <div className="commentRemoveEditDiv">
            <p>Comments</p>
            <p className="commentRemoveEdit">Remove</p>
            <p className="commentRemoveEdit">Edit</p>
          </div>
        </div>
        <div className="completedRing">
          <div className="ring">.</div>
          <div>
            <h2>64%</h2>
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
    <div className="addBookDiv">
      <div className="addBook">
        <h3>ADD NEW BOOK</h3>
        <input placeholder="Book Title" />
        <select>
          <option value="Category">Category</option>
          <option value="Action">Action</option>
          <option value="Action">Science Fiction</option>
          <option value="Action">Economy</option>
        </select>
        <button type="button" className="addBookButton">ADD BOOK</button>
      </div>
    </div>
  </div>
);

export default Books;
