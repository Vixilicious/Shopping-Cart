import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Store from './components/store/Store';
import Navbar from './components/navbar/Navbar';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}
