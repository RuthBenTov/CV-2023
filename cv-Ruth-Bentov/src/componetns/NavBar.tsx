import React from 'react';

const NavBar: React.FC = () => {
  return (
    <div className="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default NavBar;