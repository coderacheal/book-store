import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <div>
    <div className="header">
      <div className="ulDiv">
        <ul>
          <h2>BookStore CMS</h2>
          <li><Link to="/">BOOKS</Link></li>
          <li><Link to="categories">CATEGORIES</Link></li>
        </ul>
      </div>
    </div>
  </div>
);

export default Navbar;
