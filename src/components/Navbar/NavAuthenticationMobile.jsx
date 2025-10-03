import Link from "next/link";
import { Button } from "../ui/button";
import { DrawerClose } from "../ui/drawer";
// import { useSession } from "next-auth/react";
// import SignoutButton from "../UI/SignoutButton";

const NavAuthenticationMobile = () => {
    // const { data: session } = useSession();
    // if (session) return (
    //     <div className="w-full">
    //         <SignoutButton />
    //     </div>
    // )
    return (
        <div className="w-full">
            <Link href="/registration">
                <DrawerClose asChild>
                    <Button className='w-full'>
                        Get Started
                    </Button>
                </DrawerClose>
            </Link>
        </div>
    );
};

export default NavAuthenticationMobile;

