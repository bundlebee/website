import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <nav>
        <h4 className="footer-title">{'BUNDLE BEE'}</h4>
        <div className="navWide">
          <a href="#about">ABOUT US</a>
          <a href="#contact">CONTACT</a>
          <a href="#webpack">WEBPACK</a>
          <a href="#parcel">PARCEL</a>
          <a href="#rollup">ROLLUP</a>
          <a href="https://github.com/bundlebee/bundle-bee/wiki">DOCS</a>
          <span>&copy; Copyright 2018</span>

        </div>
      </nav>
    </div>
  )
};

export default Footer;