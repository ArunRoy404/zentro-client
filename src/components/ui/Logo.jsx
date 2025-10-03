import Image from "next/image";
import Link from "next/link";

const Logo = ({ variant }) => {
    let logo = "/logo/LogoWhite.svg";
    if (variant === 'primary') {
        logo = "/logo/LogoBlack.svg"
    }


    return (
        <Link href={'/'} className="flex items-center gap-2">
            <div className="relative w-7 h-7 ">
                <Image
                    src={logo}
                    alt='Zentro Logo'
                    fill
                    style={{ objectFit: "contain" }}
                />
            </div>
            <h1 className={` ${variant==='primary' ?'' : 'text-white' } text-2xl font-bold`}>Zentro</h1>
        </Link>
    );
};

export default Logo;