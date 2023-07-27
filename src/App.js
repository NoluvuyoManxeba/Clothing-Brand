import React from 'react';
import Header from './Header';
import LandingPage from './LandingPage';
import Product from './Product';

const products = [
    { imgSrc: 'https://cdn.shopify.com/s/files/1/0263/5772/7287/products/100_-Vegan-black-T-Shirt_360x.png?v=1656482262', title: '100% Vegan T-shirt', description: 'Our T-shirts are made from 100% premium cotton. They are very comfortable and soft.All our garments are made at a vertically integrated factory in the Western Cape, South Africa. From the sourcing of cotton to the delivery of our garments, we are committed to supporting local.', price: '300' },
    { imgSrc: 'https://cdn.shopify.com/s/files/1/0263/5772/7287/products/Blessed-Bok-Black-T-Shirt_540x.png?v=1667545336', title: '#BlessedBok T-shirt', description: 'Our T-shirts are made from 100% premium cotton. They are very comfortable and soft.All our garments are made at a vertically integrated factory in the Western Cape, South Africa. From the sourcing of cotton to the delivery of our garments, we are committed to supporting local.', price: '200' },
    { imgSrc: 'https://cdn.shopify.com/s/files/1/0263/5772/7287/products/100_-Enigineer-Black-T-Shirt_360x.png?v=1666332647', title: '100% Engineer', description: 'Our T-shirts are made from 100% premium cotton. They are very comfortable and soft.All our garments are made at a vertically integrated factory in the Western Cape, South Africa. From the sourcing of cotton to the delivery of our garments, we are committed to supporting local.', price: '100' },
];

function App() {
    return (
        <div>
            <Header isLoggedIn={false} />
            <LandingPage />
            {products.map((product, index) => (
                <Product key={index} {...product} />
            ))}
        </div>
    );
}

export default App;
