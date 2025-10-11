import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { patchUser } from "@/api/userApi";
import { useState } from "react";
import Spinner from "@/components/ui/Spinner";
import { toast } from "sonner";

export function AcceptAgent({ agent, handleUpdate }) {
    const [isLoading, setIsLoading] = useState(false);

    const handleBan = async () => {
        // setIsLoading(true);
        // try {
        //     // Patch user role to 'banned'
        //     await patchUser({ banned: !agent?.banned }, agent._id);

        //     toast(`User ${agent.name} has been banned.`);

        //     // refresh data 
        //     handleUpdate()

        // } catch (error) {
        //     toast.error("Failed to ban user. Try again.");
        // } finally {
        //     setIsLoading(false);
        // }
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button size="sm" className={'bg-green-600'}>
                    {isLoading ? <Spinner size={8} color={'white'} /> : "Accept"}
                </Button>
            </AlertDialogTrigger>

            <AlertDialogContent className={'z-[100]'}>
                <AlertDialogHeader>
                    <AlertDialogTitle>{`Accept Agent request from user ${agent?.name}`}</AlertDialogTitle>
                    <AlertDialogDescription>
                        Are you sure you want to continue?
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleBan} size="sm">
                        Continue
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
