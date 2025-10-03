import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Menu } from "lucide-react"
import MobileNavigation from "./MobileNavigation"
import Logo from "../ui/Logo"
import NavAuthenticationMobile from "./NavAuthenticationMobile"

export function DrawerNavbar() {

    return (
        <Drawer direction='left'>

            {/* Drawer open button  */}
            <DrawerTrigger asChild>
                <Button variant="ghost">
                    <Menu size={24} />
                </Button>
            </DrawerTrigger>

            {/* content  */}
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">

                    {/* logo  */}
                    <DrawerHeader>
                        <Logo variant={'primary'} />
                    </DrawerHeader>

                    {/* navigation links  */}
                    <MobileNavigation />

                    <DrawerFooter>
                        {/* registration button  */}
                        <NavAuthenticationMobile />

                        {/* close button  */}
                        <DrawerClose asChild>
                            <Button variant="outline">Close</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
