// @ts-nocheck
import React from 'react';
import logo from './logo.svg';
import bundlebeelogo from './logo.png'
import GitHub from './git.svg';
import NPM from './npm.svg';
import '../styles/header.css';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <div className="navWide">
                    <img src={logo} className="App-logo" alt="logo" width="160"/>
                    <div>
                        <img src={bundlebeelogo} alt="Bundle Bee Logo" />
                        <div><p className="subTitle">Simplify Your Build Process</p></div>
                    </div>
                </div>
                <div className="navWide">
                    <a href="#home">HOME</a>
                    <a href="#demo">DEMO</a>
                    <a href="https://github.com/bundlebee/bundle-bee/wiki" target="_blank">DOCS</a>
                    <a href="https://github.com/bundlebee/bundle-bee" target="_blank"><img src={GitHub} alt="GitHub Logo" /></a>
                </div>
            </nav>
        </div>
    )
};

export default Header;