import Link from "next/link";
import { Button } from "../ui/button";
import { DrawerClose } from "../ui/drawer";
import { useSession } from "next-auth/react";
import SignoutButton from "../Authentication/SignoutButton";

const NavAuthenticationMobile = () => {
    const { data: session } = useSession();
    if (session) return (
        <div className="w-full">
            <SignoutButton />
        </div>
    )
    return (
        <Link href="/signin">
            <DrawerClose asChild>
                <Button variant={'outline'} className='w-full'>
                    Sign In
                </Button>
            </DrawerClose>
        </Link>
    );
};

export default NavAuthenticationMobile;

