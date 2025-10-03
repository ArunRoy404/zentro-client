import NavbarAuth from '@/components/Navbar/NavbarAuth';
import React from 'react';

const layout = ({ children }) => {
    return (
        <main
            style={{ overflowX: 'hidden' }}
            className='relative'>
            <NavbarAuth />
            {children}
        </main>
    );
};

export default layout;