import React from 'react';
import { HeaderWrapper } from './styled';

function Header({ isLoggedIn }) {
    return (
        <HeaderWrapper>
            <img src='https://dslv9ilpbe7p1.cloudfront.net/Gd9u7SPp-WNQ-n4Sgx017A_store_header_image' alt='Brand logo' />
            <h1>Awesome T's</h1>
            <div>{isLoggedIn ? 'Welcome back!' : 'Please sign in.'}</div>
        </HeaderWrapper>
    );
}

export default Header;