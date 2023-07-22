import Header from './components/Header';
import Home from './pages/Home';
import { useSelector, useDispatch } from 'react-redux';
import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';
import Buy from './pages/Buy';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
