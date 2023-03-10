import '../styles/categories.css';
import { useState } from 'react';

const Categories = () => {
  const [status, setStatus] = useState('Page Under Construction');

  return (
    <div className="CategoriesDiv">
      <div>{status}</div>
    </div>
  );
};

export default Categories;
