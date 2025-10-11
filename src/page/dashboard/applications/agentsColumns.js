"use client";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import DragHandle from "../../../components/Dashboard/Table/DragHandle";
import SortingColumn from "../../../components/Dashboard/Table/SortingColumn";
import React from "react";
import { AcceptAgent } from "./AcceptAgent";

const agentsColumns = (handleUpdate) => {
    return [
        // Drag handle
        {
            id: "drag",
            header: () => null,
            cell: ({ row }) => <DragHandle id={row.original._id} />,
        },

        // Select checkbox
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


        // Name
        {
            accessorKey: "name",
            header: ({ column }) => <SortingColumn column={column}>Name</SortingColumn>,
            cell: ({ row }) => <div className="font-medium text-sm">{row.original.name}</div>,
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

        // Bio
        {
            accessorKey: "bio",
            header: "Bio",
            cell: ({ row }) => (
                <div className="truncate text-sm text-muted-foreground w-56">
                    {row.original.bio || "—"}
                </div>
            ),
        },

        // License number
        {
            accessorKey: "licenseNo",
            header: ({ column }) => <SortingColumn column={column}>License No</SortingColumn>,
            cell: ({ row }) => (
                <div className="text-sm text-muted-foreground">{row.original.licenseNo}</div>
            ),
        },

        // Office Address
        {
            accessorKey: "officeAddress",
            header: 'Office',
            cell: ({ row }) => (
                <div className="truncate text-sm text-muted-foreground w-40">
                    {row.original.officeAddress}
                </div>
            ),
        },

        // Rating
        {
            accessorKey: "rating",
            header: ({ column }) => <SortingColumn column={column}>Rating</SortingColumn>,
            cell: ({ row }) => (
                <div className="text-sm font-medium text-muted-foreground">
                    ⭐ {row.original.rating ?? 0}
                </div>
            ),
        },

        // Total Sales
        {
            accessorKey: "totalSales",
            header: ({ column }) => <SortingColumn column={column}>Sales</SortingColumn>,
            cell: ({ row }) => (
                <div className="text-sm text-muted-foreground">{row.original.totalSales}</div>
            ),
        },

        // Total Rentals
        {
            accessorKey: "totalRentals",
            header: ({ column }) => <SortingColumn column={column}>Rentals</SortingColumn>,
            cell: ({ row }) => (
                <div className="text-sm text-muted-foreground">{row.original.totalRentals}</div>
            ),
        },

        // Status
        {
            accessorKey: "status",
            header: ({ column }) => <SortingColumn column={column}>Status</SortingColumn>,
            cell: ({ row }) => (
                <Badge
                    variant={
                        row.original.status === "approved"
                            ? "default"
                            : row.original.status === "pending"
                                ? "secondary"
                                : "destructive"
                    }
                    className={`capitalize ${row.original.status === "approved" ? 'bg-green-600' : 'bg-yellow-600'}`}
                >
                    {row.original.status}
                </Badge>
            ),
        },

        //Accept Button
        {
            header: "Ban actions",
            cell: ({ row }) => {
                return (
                    <div>
                        <AcceptAgent handleUpdate={handleUpdate} agent={row?.original} />
                    </div>
                );
            },
        },
    ];
};

export default agentsColumns;
