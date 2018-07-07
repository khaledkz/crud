import React from 'react';
import logo from './STV_logo_2014.png';
import './Header.css';

const Header = () => (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">The Home Your Favorite shows</h1>
        </header>
    )
export default Header;