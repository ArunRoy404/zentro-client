import NavbarAuth from '@/components/Navbar/NavbarAuth';
import React from 'react';

const layout = ({ children }) => {
    return (
        <main className='w-screen h-screen relative'>
            <NavbarAuth />
            {children}
        </main>
    );
};

export default layout;