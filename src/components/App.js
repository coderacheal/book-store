import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Books from './Books';
import Categories from './Categories';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
        <Route></Route>
      </Routes>
    </>
  );
}

export default App;
