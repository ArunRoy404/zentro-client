"use client"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      const title = row.getValue("title")
      return <div className="font-medium">{title}</div>
    },
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const price = row.getValue("price")
      const formatted = new Intl.NumberFormat('en-BD', {
        style: 'currency',
        currency: 'BDT'
      }).format(price)
      return <div>{formatted}</div>
    },
  },
  {
    accessorKey: "propertyCategory",
    header: "Category",
    cell: ({ row }) => {
      const category = row.getValue("propertyCategory")
      return (
        <Badge variant="outline" className="capitalize">
          {category || "N/A"}
        </Badge>
      )
    },
  },
  {
    accessorKey: "location.city",
    header: "City",
    cell: ({ row }) => {
      const city = row.original.location?.city
      return <div>{city || "N/A"}</div>
    },
  },
  {
    accessorKey: "location.state",
    header: "State",
    cell: ({ row }) => {
      const state = row.original.location?.state
      return <div>{state || "N/A"}</div>
    },
  },
  {
    accessorKey: "propertyArea.value",
    header: "Area",
    cell: ({ row }) => {
      const area = row.original.propertyArea
      return (
        <div>
          {area ? `${area.value} ${area.unit}` : "N/A"}
        </div>
      )
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status")
      const getStatusVariant = (status) => {
        switch (status) {
          case "available":
            return "default"
          case "unselled":
            return "secondary"
          case "sold":
            return "destructive"
          default:
            return "outline"
        }
      }
      
      return (
        <Badge variant={getStatusVariant(status)} className="capitalize">
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: "likes",
    header: "Likes",
    cell: ({ row }) => {
      const likes = row.getValue("likes")
      return <div className="text-center">{likes}</div>
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"))
      return <div>{date.toLocaleDateString()}</div>
    },
  },
]