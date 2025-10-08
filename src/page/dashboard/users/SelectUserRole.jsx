"use client"

import * as React from "react"
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

const SelectUserRole = ({ defaultValue, user }) => {
    const [selectedRole, setSelectedRole] = React.useState(defaultValue)
    const [openDialog, setOpenDialog] = React.useState(false)

    const handleChangeRole = (value) => {
        setSelectedRole(value)
        setOpenDialog(true) // show alert dialog on role change
    }

    const handleConfirm = () => {
        console.log(`Role changed for ${user.name} to ${selectedRole}`)
        setOpenDialog(false)
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
                            Are you sure you want to change {user.name}'s role to {selectedRole}?
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleConfirm}>Confirm</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default SelectUserRole
