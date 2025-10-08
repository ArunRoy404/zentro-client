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
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export function BanDialog({ user }) {
    const handleBan = () => {
        console.log("Banning user:", user);
        // You can call your API or mutation here
    };


    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button size={'sm'} variant="destructive">Ban</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        {
                            `Ban user ${user?.name}`
                        }
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This will ban the user from accessing the platform. Are you sure you want to continue?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleBan} >
                        Continue
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
