import Link from 'next/link';
import { usePathname } from 'next/navigation';
import navData from '../../content/navData.json';

const DesktopNavigation = () => {
    const pathName = usePathname() 
    return (
        <ul className="hidden lg:flex items-center gap-8">
            {navData.navLinks.map((link) => (
                <li key={link.href}>
                    <Link href={link.href} className={`${pathName==link.href ? ' font-bold' :''} text-sm hover:text-secondary`}>
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default DesktopNavigation;