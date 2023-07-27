import React from 'react';
import { ProductWrapper } from './styled';

function Product({ imgSrc, title, description, price }) {
    return (
        <ProductWrapper>
            <img src={imgSrc} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <p>R{price}</p>
        </ProductWrapper>
    );
}

export default Product;