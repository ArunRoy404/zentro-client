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
import { signOut, useSession } from "next-auth/react";
import { LogOut, Settings, User } from "lucide-react";
import { Button } from "../../ui/button";
import AvatarButton from "./AvatarButton";
import { useState } from "react";
import { toast } from "sonner";
import Spinner from "@/components/ui/Spinner";


const buttons = [
    {
        label: "Profile",
        link: "/profile",
        icon: User,
    },
]

const AvatarUser = () => {
    const session = useSession()
    const user = session?.data?.user
    const [isLoading, setIsLoading] = useState(false);

    const handleSignout = async (e) => {
        setIsLoading(true)
        try {
            await signOut({ redirect: false })
            toast.success("Signout successful")
        } catch {
            toast.error("Signout unsuccessful")
        } finally {
            setIsLoading(false)
        }
    }

    if (!user) return <></>

    return (
        <div className="">
            <Popover>
                {/* avatar  */}
                <PopoverTrigger>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Avatar className={'cursor-pointer'}>
                                <AvatarImage src={user?.photoUrl} />
                                <AvatarFallback>{user?.name[0].toUpperCase()}</AvatarFallback>
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
                        onClick={handleSignout}
                        disabled={isLoading}
                        variant="ghost"
                        className="w-full justify-start text-red-600" >
                        <LogOut className="mr-2 h-4 w-4" />

                        {
                            isLoading
                                ? <span className="ml-4"> <Spinner size='8' /></span>
                                : 'Sign out'
                        }
                    </Button>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default AvatarUser;