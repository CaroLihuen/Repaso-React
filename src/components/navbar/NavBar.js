import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/" > Home </Link>
      <Link to="/characters" >Charaters</Link>
      <Link to="/episodes" >Episodes</Link>
    </div>
  );
}

export default Navbar;
