"use client";

import React, { useState } from 'react';
import DesktopNavigation from './DesktopNavigation';
import NavAuthentication from './NavAuthentication';
import Logo from '../ui/Logo';
import { usePathname } from 'next/navigation';
import { DrawerNavbar } from './DrawerNavbar';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const pathname = usePathname()
    if (pathname.includes('/dashboard') || pathname.includes('/signin') || pathname.includes('/registration')) {
        return <></>
    }

    return (
        <header className="bg-white fixed w-full z-50">
            <nav className="container mx-auto flex items-center justify-between px-6 py-4">
                {/* logo  */}
                <Logo variant={'primary'} />

                {/* Desktop Navigation */}
                <DesktopNavigation />

                {/* auth buttons */}
                <NavAuthentication />

                {/* Mobile Hamburger */}
                <div className='lg:hidden'>
                    <DrawerNavbar />
                </div>
            </nav>

            {/* Mobile Menu */}

        </header>
    );
};

export default Navbar;