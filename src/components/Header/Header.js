import React from 'react';

import './Header.css';
import Search from './Search';
import Cart from './Cart';

const header = () => (
    <nav className="header content">
        <div className="logo">
            <h1>Shoppertise</h1>
        </div>
        <div className="actions">
            <Search />
            <Cart />
        </div>
    </nav>
);

export default header;
