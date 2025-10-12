import { navLinks } from '@/content/navData';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Button } from '../ui/button';


const MobileNavigation = () => {
    const pathName = usePathname()
    return (
        <div className="bg-white flex flex-col gap-4 px-6 py-4">
            {navLinks?.map((link) => {
                const {href, label, icon: Icon } = link
                return (
                    <Link
                        key={href}
                        href={href}
                    >
                        <Button
                            className={`${pathName == href ? 'text-primary font-bold' : ''} h-4 hover:text-secondary`}
                            variant="link">
                            <Icon />
                            {label}
                        </Button>
                    </Link>
                )
            })}
        </div>
    );
};

export default MobileNavigation;