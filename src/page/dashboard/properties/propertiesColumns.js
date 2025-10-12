import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import DragHandle from "../../../components/Dashboard/Table/DragHandle"
import Image from "next/image"
import SortingColumn from "../../../components/Dashboard/Table/SortingColumn"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const propertiesColumns = [
  {
    id: "drag",
    header: () => null,
    cell: ({ row }) => <DragHandle id={row.original.id} />,
  },
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
    header: ({ column }) => <SortingColumn column={column}>Price</SortingColumn>,
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
    header: ({ column }) => <SortingColumn column={column}>Category</SortingColumn>,
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
    header: ({ column }) => <SortingColumn column={column}>Area</SortingColumn>,
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
    header: ({ column }) => <SortingColumn column={column}>Status</SortingColumn>,
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
        <Badge variant={getStatusVariant(status)} className={`capitalize ${status === 'available' ? 'bg-green-700' : ''}`}>
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: "likes",
    header: ({ column }) => <SortingColumn column={column}>Likes</SortingColumn>,
    cell: ({ row }) => {
      const likes = row.getValue("likes")
      return <div>{likes}</div>
    },
  },
  {
    header: "Actions",
    cell: ({ row }) => {
      const id = row.original._id
      return (
        <div className="space-x-2">
          <Link href={`/properties/${id}`}>
            <Button size={'sm'} variant={'outline'} >View</Button>
          </Link>
          <Link href={`/dashboard/properties/update/${id}`}>
            <Button size={'sm'} >Edit</Button>
          </Link>
        </div>
      );
    },
  },

]