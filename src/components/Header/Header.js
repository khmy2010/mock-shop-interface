import React from 'react';

import './Header.css';

import Logo from './Logo';
import Search from './Search';
import Cart from './Cart';

const header = () => (
    <nav className="header content">
        <div className="logo">
            <Logo />
        </div>
        <div className="actions">
            <Search />
            <Cart />
        </div>
    </nav>
);

export default header;
