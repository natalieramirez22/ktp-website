import React from 'react';
import WideHeader from './Wideheader.js';
import HamburgerHeader from './HamburgerHeader.js';

const Header = () => (
    <div>
        <div className='hidden lg:block'><WideHeader></WideHeader></div>
        <div className='block lg:hidden'><HamburgerHeader></HamburgerHeader></div>
    </div>
);

export default Header;
