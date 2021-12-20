import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';


function Nav({ onSearch }) {
  return (
    <div className="nav_content">
      <nav className="navbar navbar-dark fond" >
        <Link to='/' className="link">
          <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          <span className="navbar-brand title">
            Henry - Weather App
          </span> 
        </Link>
        <Link to='/about' className="link" >
          <span className="about">About</span>
        </Link>
        <SearchBar
          onSearch={onSearch}
        />
      </nav>
    </div>

  );
};

export default Nav;
