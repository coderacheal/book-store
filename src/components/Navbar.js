import { Link } from "react-router-dom";

const Navbar = () => {
  (
    <nav>
      <ul>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/categories">Categories</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
