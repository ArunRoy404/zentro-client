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

export function BanDialog({ user, handleUpdate }) {
    const [isLoading, setIsLoading] = useState(false);

    const handleBan = async () => {
        setIsLoading(true);
        try {
            // Patch user role to 'banned'
            await patchUser({ banned: !user?.banned }, user._id);

            toast(`User ${user.name} has been banned.`);

            // refresh data 
            handleUpdate()

        } catch (error) {
            toast.error("Failed to ban user. Try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {
                    user?.banned
                        ? <Button size="sm" className={'bg-green-700'} >
                            {isLoading ? <Spinner size={8} color={'white'} /> : 'Remove Ban'}
                        </Button>
                        : <Button size="sm" variant="destructive">
                            {isLoading ? <Spinner size={8} color={'white'} /> : "Ban"}
                        </Button>
                }
            </AlertDialogTrigger>

            <AlertDialogContent className={'z-[100]'}>
                <AlertDialogHeader>
                    {
                        user?.banned
                            ? <AlertDialogTitle>{`Remove Ban from user ${user?.name}`}</AlertDialogTitle>
                            : <AlertDialogTitle>{`Ban user ${user?.name}`}</AlertDialogTitle>
                    }
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
