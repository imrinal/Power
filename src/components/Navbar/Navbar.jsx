import React from 'react';
import './Navbar.css';
import logo from '../../assets/Logo.png';

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
      <img src={logo} alt="Logo Img" />
      <ul>
        <li onClick={() => scrollToSection('Home')}>Home</li>
        <li onClick={() => scrollToSection('Plan')}>Plan</li>
        <li onClick={() => scrollToSection('progress')}>Progress</li>
        <li onClick={() => scrollToSection('about')}>About Us</li>
        <li onClick={() => scrollToSection('contact')}>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
