import '../styles/categories.css';
import { useSelector } from 'react-redux';

const Categories = () => {
  const notReady = useSelector((state) => state.categories.underconstruction);
  return (
    <div className="CategoriesDiv">
      <p>{notReady}</p>
    </div>
  );
};

export default Categories;
