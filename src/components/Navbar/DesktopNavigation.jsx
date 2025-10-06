import { navLinks } from '@/content/navData';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DesktopNavigation = () => {
    const pathName = usePathname()
    return (
        <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
                <li key={link.href}>
                    <Link href={link.href} className={`${pathName == link.href ? ' font-bold' : ''} text-sm hover:text-secondary`}>
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default DesktopNavigation;