import React from 'react';

const price = ({ price, discounted }) => (
    <div>
        <span className="product-price">&#163; {price}</span>
        {discounted ? (
            <span className="product-ori-price">&#163; {discounted}</span>
        ) : null}
    </div>
);

export default price;
