import React from 'react';

import './Footer.css';

import Column from './Column';

const CATEGORIES_LINK = [
    {
        desc: 'Bedroom',
        to: ''
    },
    {
        desc: 'Livingroom',
        to: ''
    },
    {
        desc: 'Lighting',
        to: ''
    },
    {
        desc: 'Accessories',
        to: ''
    }
];

const INFORMATION_LINK = [
    {
        desc: 'Specials',
        to: ''
    },
    {
        desc: 'New products',
        to: ''
    },
    {
        desc: 'Best sellers',
        to: ''
    },
    {
        desc: 'Our stores',
        to: ''
    },
    {
        desc: 'Contact us',
        to: ''
    }
];

const ACCOUNT_LINK = [
    {
        desc: 'My orders',
        to: ''
    },
    {
        desc: 'My credit slips',
        to: ''
    },
    {
        desc: 'My addresses',
        to: ''
    },
    {
        desc: 'My personal info',
        to: ''
    }
];

const EXTRAS_LINK = [
    {
        desc: 'Orders & Returns',
        to: ''
    },
    {
        desc: 'Search Terms',
        to: ''
    },
    {
        desc: 'Advanced Search',
        to: ''
    },
    {
        desc: 'Affiliates',
        to: ''
    },
    {
        desc: 'Group Sales',
        to: ''
    }
];

const footer = () => (
    <footer>
        <div className="footer-container">
            <Column title="Categories" links={CATEGORIES_LINK} />
            <Column title="Information" links={INFORMATION_LINK} />
            <Column title="My Account" links={ACCOUNT_LINK} />
            <Column title="Extras" links={EXTRAS_LINK} />
        </div>
    </footer>
);

export default footer;
