import React from 'react';

import image from '../../assets/images/270x337.png';
import './Catalog.css';

import Slider from '../../containers/Slider/Slider';
import Checkbox from '../../containers/Checkbox/Checkbox';

const catalog = () => {
    return (
        <div className="catalog">
            <div className="catalog-header">Catalog</div>
            <div className="catalog-filter">
                <div className="filter-price">
                    <h5>Price</h5>
                    <div className="range-value">
                        <span>Range: </span>
                        <span>&#163;40 - &#163;570</span>
                    </div>
                    <Slider min={40} max={570} />
                    <h5>Size</h5>
                    <div className="size-labels">
                        <Checkbox label="S (4)" init />
                        <Checkbox label="M (5)" init />
                        <Checkbox label="L (3)" init />
                    </div>
                </div>
                <div className="filter-color">
                    <h5>Color</h5>
                    <div className="color-labels">
                        <Checkbox label="Beige (4)" init />
                        <Checkbox label="White (5)" />
                        <Checkbox label="Yellow (3)" init />
                        <Checkbox label="Pink (3)" />
                        <Checkbox label="Black (3)" />
                        <Checkbox label="Blue (3)" />
                        <Checkbox label="Green (3)" />
                        <Checkbox label="Orange (3)" />
                        <Checkbox label="Purple (5)" />
                        <Checkbox label="Gray (1)" />
                    </div>
                </div>
            </div>
            <div className="catalog-image">
                <img src={image} alt="270x337" />
            </div>
        </div>
    );
};

export default catalog;
