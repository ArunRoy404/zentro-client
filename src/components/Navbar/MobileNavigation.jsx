import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import navData from '../../content/navData.json';

const MobileNavigation = () => {
    const pathName = usePathname()
    return (
        <div className="bg-white flex flex-col gap-4 px-6 py-4">
            {navData?.navLinks?.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={`${pathName == link.href ? 'text-primary font-bold' : ''}  hover:text-secondary`}
                    onClick={() => setMenuOpen(false)}
                >
                    {link.label}
                </Link>
            ))}
        </div>
    );
};

export default MobileNavigation;