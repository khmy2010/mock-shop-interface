import React from 'react';

import './Breadcrumb.css';

const breadcrumb = () => (
    <div className="breadcrumb">
        <span>Home</span> &gt;
        <span>Lighting</span> &gt;
        <span>Categories 01</span> &gt;
        <span className="breadcrumb-active">Washing Machine 1</span>
    </div>
);

export default breadcrumb;
