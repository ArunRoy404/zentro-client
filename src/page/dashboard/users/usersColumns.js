import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import DragHandle from "../../../components/Dashboard/Table/DragHandle"
import Image from "next/image"
import { BanDialog } from "./BanDialog"
import SelectUserRole from "./SelectUserRole"
import SortingColumn from "../../../components/Dashboard/Table/SortingColumn"

import React from 'react';

const usersColumns = (handleUpdate) => {
    return [
        {
            id: "drag",
            header: () => null,
            cell: ({ row }) => <DragHandle id={row.original.id} />,
        },
        {
            id: "select",
            header: ({ table }) => (
                <div className="flex items-center justify-center">
                    <Checkbox
                        checked={
                            table.getIsAllPageRowsSelected() ||
                            (table.getIsSomePageRowsSelected() && "indeterminate")
                        }
                        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                        aria-label="Select all"
                    />
                </div>
            ),
            cell: ({ row }) => (
                <div className="flex items-center justify-center">
                    <Checkbox
                        checked={row.getIsSelected()}
                        onCheckedChange={(value) => row.toggleSelected(!!value)}
                        aria-label="Select row"
                    />
                </div>
            ),
            enableSorting: false,
            enableHiding: false,
        },

        // Profile photo
        {
            header: "Photo",
            cell: ({ row }) => (
                <div>
                    <Image
                        src={row.original.photoUrl}
                        alt={row.original.name}
                        width={36}
                        height={36}
                        className="rounded-full object-cover border"
                    />
                </div>
            ),
        },

        // Name
        {
            accessorKey: "name",
            header: ({ column }) => <SortingColumn column={column}>Name</SortingColumn>,
            cell: ({ row }) => (
                <div className="font-medium text-sm">{row.original.name}</div>
            ),
        },

        // Email
        {
            accessorKey: "email",
            header: ({ column }) => <SortingColumn column={column}>Email</SortingColumn>,
            cell: ({ row }) => (
                <div className="truncate text-muted-foreground text-sm w-40">
                    {row.original.email}
                </div>
            ),
        },

        // Phone
        {
            accessorKey: "phone",
            header: "Phone",
            cell: ({ row }) => (
                <div className="text-sm text-muted-foreground">{row.original.phone}</div>
            ),
        },

        // Address
        {
            accessorKey: "address",
            header: ({ column }) => <SortingColumn column={column}>Address</SortingColumn>,
            cell: ({ row }) => (
                <div className="truncate text-sm text-muted-foreground w-32">
                    {row.original.address}
                </div>
            ),
        },

        // Role with badge
        {
            accessorKey: "role",
            header: ({ column }) => <SortingColumn column={column}>Role</SortingColumn>,
            cell: ({ row }) => (
                <Badge
                    variant={row.original.role === "agent" ? "default" : "outline"}
                    className={`capitalize ${row.original.role === "admin" ? "bg-green-800 text-white" : ""}`}
                >
                    {row.original.role}
                </Badge>
            ),
        },

        // Created date
        {
            accessorKey: "accountCreatedAt",
            header: ({ column }) => <SortingColumn column={column}>Created At</SortingColumn>,
            cell: ({ row }) => {
                const date = new Date(row.original.accountCreatedAt);
                return (
                    <div className="text-xs text-muted-foreground">
                        {date.toLocaleDateString()}
                    </div>
                );
            },
        },

        // Change Role
        {

            header: "Change Role",
            cell: ({ row }) => {
                const user = row?.original
                return (
                    <SelectUserRole handleUpdate={handleUpdate} defaultValue={user?.role} user={user} />
                );
            },
        },

        // Ban Users
        {
            header: "Ban actions",
            cell: ({ row }) => {
                return (
                    <div>
                        <BanDialog handleUpdate={handleUpdate} user={row?.original} />
                    </div>
                );
            },
        },
    ]
};

export default usersColumns;
