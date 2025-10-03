import React from 'react';
import Logo from '../ui/Logo';

const NavbarAuth = () => {
    return (
        <nav className='absolute top-0 z-100 py-3 px-4 md:py-6 md:px-8'>
            <Logo variant='primary' />
        </nav>
    );
};

export default NavbarAuth;