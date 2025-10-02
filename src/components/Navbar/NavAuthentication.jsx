
// import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "../ui/button";

const NavAuthentication = () => {
    // const { data: session } = useSession();
    // if (session) return (
    //     <div className="hidden md:block">
    //         <SignoutButton/>
    //     </div>
    // )
    return (
        <div className="hidden md:block">
            {/* <Link href="/signin">
                <Button>
                    Sign In
                </Button>
            </Link> */}
            <Link href="/registration">
                <Button>
                    Register
                </Button>
            </Link>
        </div>
    );
};

export default NavAuthentication;