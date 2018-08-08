import React from 'react';
import logo from './logo.svg';
import GitHub from './git.svg';
import NPM from './npm.svg';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <nav>
        <img src={logo} className="App-logo" alt="logo" />
        <h4 className="App-title">Bundle Bee</h4>
        <div className="navWide">
          <a href="#">HOME</a>
          <a href="#">DEMO</a>
          <a href="https://github.com/bundle-bee/bundle-bee">DOCS</a>
          <a href="https://github.com/bundle-bee/bundle-bee"><img src={GitHub} alt="GitHub Logo" /></a>
          <a href="https://npm.org"><img src={NPM} alt="NPM Logo" /></a>
        </div>
      </nav>
    </div>
  )
};

export default Header;