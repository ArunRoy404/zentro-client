import Link from "next/link";
import { Button } from "../ui/button";

const NavAuthentication = () => {
    return (
        <div className="space-x-4">

            <Link href="/signin">
                <Button variant={'outline'} >
                    Sign In
                </Button>
            </Link>
            
            <Link href="/properties">
                <Button>
                    Get Started
                </Button>
            </Link>
        </div>
    );
};

export default NavAuthentication;