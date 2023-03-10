import { useDispatch } from "react-redux";
import { addBook } from "../redux/books/booksSlice";
import { useState } from "react";

const Form = () => {
  const dispatch = useDispatch();

  const [addTitle, setTitle] = useState('');
  const [addAuthor, setAuthor] = useState('');

  return (
    <form className="addBookDiv">
      <div className="addBook">
        <h3>ADD NEW BOOK</h3>
        <input type="text" placeholder="Add a book" onChange={(e) => setTitle(e.target.value)} />
        <select>
          <option value="Category">Author</option>
          <option value="Action">Susanne</option>
          <option value="Action">Frank</option>
          <option value="Action">Karl Max</option>
        </select>
        <button type="button" className="addBookButton" onClick={() => dispatch(addBook())}>ADD BOOK</button>
      </div>
    </form>
  );
};
export default Form;
