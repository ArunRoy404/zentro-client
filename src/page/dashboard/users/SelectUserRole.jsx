"use client"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction,
} from "@/components/ui/alert-dialog"
import { useState } from "react"
import { patchUser } from "@/api/userApi"
import { toast } from "sonner"

const SelectUserRole = ({ defaultValue, user, handleUpdate }) => {
    const [selectedRole, setSelectedRole] = useState(defaultValue)
    const [openDialog, setOpenDialog] = useState(false)
    const [roleChoice, setRoleChoice] = useState(defaultValue)
    const [isLoading, setIsLoading] = useState(false);

    const handleChangeRole = (value) => {
        setRoleChoice(value)
        setOpenDialog(true) // show alert dialog on role change
    }

    const handleConfirm = async () => {
        setIsLoading(false)
        try {
            // Patch user role to 'banned'
            await patchUser({ role: roleChoice }, user._id);
            toast(`User ${user.name} role changed.`);

            setSelectedRole(roleChoice)

            // refresh data 
            // handleUpdate()

        } catch (error) {
            toast.error("Failed to change role. Try again.");
        } finally {
            setIsLoading(false)
            setOpenDialog(false)
        }
    }

    return (
        <>
            {/* select  */}
            <Select
                className="rounded-none"
                value={selectedRole}
                onValueChange={handleChangeRole}
            >
                <SelectTrigger>
                    <SelectValue placeholder="Change Role" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Roles</SelectLabel>
                        <SelectItem value="customer">Customer</SelectItem>
                        <SelectItem value="agent">Agent</SelectItem>
                        <SelectItem value="admin">Admin</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

            {/* Alert Dialog */}
            <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
                <AlertDialogContent className='z-[200]'>
                    <AlertDialogHeader >
                        <AlertDialogTitle>Confirm Role Change</AlertDialogTitle>
                        <AlertDialogDescription>
                            Are you sure you want to change {user.name}'s role to {roleChoice}?
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleConfirm}>
                            {isLoading ? <Spinner size={8} color={'white'} /> : 'Confirm'}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default SelectUserRole
