// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/horoscope">Horoscope</Link></li>
          <li><Link to="/compatibility">Zodiac Compatibility</Link></li>
        </ul>
      </nav>
      <h1>AstroGeeks</h1>
    </header>
  );
};

export default Header;
