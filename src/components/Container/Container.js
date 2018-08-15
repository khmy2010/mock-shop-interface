import React from 'react';

import './Container.css';

import Sales from '../Sales/Sales';
import Catalog from '../Catalog/Catalog';

const container = () => (
    <div className="layout-container">
        <Catalog />
        <Sales />
    </div>
);

export default container;
