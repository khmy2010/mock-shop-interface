import React from 'react';
import { Link } from 'react-router-dom';

import './Sales.css';

import image from '../../assets/images/870x260.png';
import Product from '../../containers/Product/Product';
import Viewbar from '../../containers/Viewbar/Viewbar';

const sales = () => (
    <div className="sales-container">
        <div className="sales-banner">
            <img src={image} alt="870x260" />
        </div>
        <div className="sales-category-info">
            <h3>Bedroom</h3>
            <span>There are 7 products.</span>
        </div>
        <Viewbar />
        <div className="products">
            <Product name="Printed Dress" price="61.19" latest />
            <Product
                name="Printed Summer Dress"
                price="34.78"
                discounted="36.61"
                latest
                sale
            />
            <Product name="Printed Summer Dress" price="36.60" latest />
            <Product name="Printed Chiffon Dress" price="24.60" latest />
            <Product name="Printed Dress" price="31.20" latest />
            <Product name="Blouse" price="32.40" latest />
        </div>
        <div className="products-footer">
            <span>Showing 1 - 10 of 10 items</span>
            <div className="pages">
                <Link to="">
                    <span className="page-arrows">&#60;</span> Previous
                </Link>
                <Link className="page-number" to="">
                    1
                </Link>
                <Link className="page-number" to="">
                    2
                </Link>
                <Link to="">
                    Next <span className="page-arrows">&#62;</span>
                </Link>
                <Link className="show-all" to="">
                    Show all
                </Link>
            </div>
        </div>
    </div>
);

export default sales;
