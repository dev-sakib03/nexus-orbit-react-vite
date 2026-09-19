import React from 'react';

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <h1>Nexus Orbit</h1>
      </div>
      <nav className="nav-menu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;