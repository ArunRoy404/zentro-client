import Link from "next/link";
import { Button } from "../ui/button";

const NavAuthentication = () => {
    return (
        <div className="hidden space-x-4 lg:block">

            <Link href="/signin">
                <Button variant={'outline'} >
                    Sign In
                </Button>
            </Link>

            <Link href="/registration">
                <Button>
                    Get Started
                </Button>
            </Link>
        </div>
    );
};

export default NavAuthentication;