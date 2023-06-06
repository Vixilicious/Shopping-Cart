import { Link, NavLink, Route, Routes } from 'react-router-dom';
import './Navbar.css';
import cartIcon from '../../../public/shopping-cart.png';

export default function Navbar() {
  return (
    <div className='nav'>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/store'>Store</Link>
        <Link to='/about'>About</Link>
      </div>
      <button
        style={{ width: '3rem', height: '3rem' }}
        className='shop-button'
      >
        <img className='shop-cart' src={cartIcon} alt='' />
      </button>
    </div>
  );
}
