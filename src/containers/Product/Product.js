import React, { Component } from 'react';

import './Product.css';

import image from '../../assets/images/270x357.png';
import Star from '../../components/Star/Star';
import Price from './Price';

class Product extends Component {
    state = {
        rating: 0
    };

    processRating = index => {
        this.setState({ rating: index + 1 });
    };

    render() {
        let stars = [];
        const ratedStars = this.state.rating - 1;

        for (let i = 0; i < 5; i++)
            stars.push(
                <Star
                    key={i}
                    isFilled={!(i > ratedStars)}
                    processRating={() => this.processRating(i)}
                />
            );

        const { name, latest, sale, price, discounted } = this.props;

        return (
            <div className="product">
                <div className="product-image">
                    <img src={image} alt="270x357" />
                    {latest ? (
                        <div className="product-strip-new">new</div>
                    ) : null}
                    {sale ? (
                        <div className="product-strip-sale">sale!</div>
                    ) : null}
                </div>
                <p className="product-name">{name}</p>
                <div className="product-info">
                    <div className="product-rating">{stars}</div>
                    <Price discounted={discounted} price={price} />
                </div>
            </div>
        );
    }
}

export default Product;
