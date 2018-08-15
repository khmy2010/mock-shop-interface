import React from 'react';

import './Container.css';

import Sales from '../Sales/Sales';

const container = () => (
    <div className="layout-container">
        <div className="catalog" />
        <Sales />
    </div>
);

export default container;
