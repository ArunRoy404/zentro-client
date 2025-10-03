import Link from "next/link";
import { Button } from "../ui/button";

const NavAuthentication = () => {
    return (
        <div className="hidden lg:block">

            <Link href="/registration">
                <Button>
                    Get Started
                </Button>
            </Link>
        </div>
    );
};

export default NavAuthentication;