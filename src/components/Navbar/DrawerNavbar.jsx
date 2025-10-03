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
                <div className="mx-auto w-full">

                    {/* logo  */}
                    <DrawerHeader>
                        <DrawerTitle className="">
                            <Logo variant={'primary'} />
                        </DrawerTitle>
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
