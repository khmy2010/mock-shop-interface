import React from 'react';

import './Sales.css';
import image from '../../assets/images/870x260.png';

import Product from '../../containers/Product/Product';

const sales = () => (
    <div className="sales-container">
        <div className="sales-banner">
            <img src={image} alt="870x260" />
        </div>
        <div className="sales-category-info">
            <h3>Bedroom</h3>
            <span>There are 7 products.</span>
        </div>
        <div className="products">
            <Product name="Printed Dress" price="61.19" latest />
            <Product name="Printed Summer Dress" price="36.61" latest sale />
            <Product name="Printed Summer Dress" price="36.60" latest />
            <Product name="Printed Chiffon Dress" price="24.60" latest />
            <Product name="Printed Dress" price="31.20" latest />
            <Product name="Blouse" price="32.40" latest />
        </div>
    </div>
);

export default sales;
