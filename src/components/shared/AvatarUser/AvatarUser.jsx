'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useSession } from "next-auth/react";
import { LogOut, Settings, User } from "lucide-react";
import { Button } from "../../ui/button";
import AvatarButton from "./AvatarButton";


const buttons = [
    {
        label: "Profile",
        link: "/profile",
        icon: User,
    },
    {
        label: "Settings",
        link: "/settings",
        icon: Settings,
    },
]

const AvatarUser = () => {
    const session = useSession()
    const user = session?.data.user


    return (
        <div className="">
            <Popover>
                {/* avatar  */}
                <PopoverTrigger>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Avatar className={'cursor-pointer'}>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>{user?.name[0]}</AvatarFallback>
                            </Avatar>
                        </TooltipTrigger>
                        <TooltipContent side={'left'}>
                            <p>{user?.name}</p>
                        </TooltipContent>
                    </Tooltip>
                </PopoverTrigger>



                <PopoverContent side='bottom' align="end" className="w-48 p-2 space-y-1">
                    {buttons.map(({ label, link, icon: Icon, className }, i) => (
                        <AvatarButton
                            key={i}
                            label={label}
                            Icon={Icon}
                            className={className}
                            link={link}
                        />

                    ))}

                    <Button
                        variant="ghost"
                        className="w-full justify-start text-red-600" >
                        <LogOut className="mr-2 h-4 w-4" />
                        Sign out
                    </Button>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default AvatarUser;