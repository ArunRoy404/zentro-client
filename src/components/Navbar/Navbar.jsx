"use client";

import Link from 'next/link';
import React from 'react';
import DesktopNavigation from './DesktopNavigation';
import { Button } from '../ui/button';
import NavAuthentication from './NavAuthentication';
import Logo from '../ui/Logo';

const Navbar = () => {
    return (
        <header className="bg-white fixed w-full z-50">
            <nav className="container mx-auto flex items-center justify-between px-6 py-4">
                {/* logo  */}
                <Logo variant={'primary'}/>

                {/* Desktop Navigation */}
                <DesktopNavigation />

                {/* auth buttons */}
                <NavAuthentication/>
            </nav>

            {/* Mobile Menu */}

        </header>
    );
};

export default Navbar;