import React from 'react';
import '../styles/footer.css';
import bundlebeelogo from './logo.png'

const Footer = () => {
  return (
    <div className="footer">
      <nav>
      <img src={bundlebeelogo} alt="Bundle Bee Logo" />
        <div className="navWide">
          <a href="#about">ABOUT US</a>
          <a href="#contact">CONTACT</a>
          <a href="https://github.com/bundlebee/bundle-bee/wiki">DOCS</a>
          <span>&copy; Copyright 2018</span>
        </div>
      </nav>
    </div>
  )
};

export default Footer;