import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Menu } from "lucide-react"
import MobileNavigation from "./MobileNavigation"
import Logo from "../ui/Logo"
import NavAuthenticationMobile from "./NavAuthenticationMobile"
import AvatarUser from "../shared/AvatarUser/AvatarUser"
import Link from "next/link"

export function DrawerNavbar() {

    return (
        <Drawer direction='left'>

            {/* Drawer open button  */}
            <DrawerTrigger asChild>
                <Button variant="outline">
                    <Menu size={24} />
                </Button>
            </DrawerTrigger>

            {/* content  */}
            <DrawerContent>
                {/* logo  */}
                <DrawerHeader>
                    <DrawerTitle className=" flex items-center justify-between">
                        {/* zentro logo  */}
                        <Logo variant={'primary'} />

                        {/* user avatar  */}
                        <AvatarUser />
                    </DrawerTitle>
                </DrawerHeader>

                {/* navigation links  */}
                <MobileNavigation />

                <DrawerFooter>
                    {/* registration button  */}
                    <NavAuthenticationMobile />

                    {/* get started  */}

                    <Link href="/properties">
                        <DrawerClose asChild>
                            <Button variant={'outline'} className='w-full'>
                                Get Started
                            </Button>
                        </DrawerClose>
                    </Link>

                    {/* close button  */}
                    <DrawerClose asChild>
                        <Button>Close</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer >
    )
}
