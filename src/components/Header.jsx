// @ts-nocheck
import React from 'react';
import logo from './logo.svg';
import GitHub from './git.svg';
import NPM from './npm.svg';
import '../styles/header.css';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <img src={logo} className="App-logo" alt="logo" />
                <h4 className="App-title">{'BUNDLE BEE'}</h4>
                <div className="navWide">
                    <a href="#home">HOME</a>
                    <a href="#demo">DEMO</a>
                    <a href="https://github.com/bundlebee/bundle-bee/wiki">DOCS</a>
                    <a href="https://github.com/bundlebee/bundle-bee"><img src={GitHub} alt="GitHub Logo" /></a>
                </div>
            </nav>
        </div>
    )
};

export default Header;