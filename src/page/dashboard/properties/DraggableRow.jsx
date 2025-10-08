"use client"

import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import {
    TableCell,
    TableRow,
} from "@/components/ui/table"

export function DraggableRow({ row }) {
    const {
        attributes,
        listeners,
        transform,
        transition,
        setNodeRef,
        isDragging,
    } = useSortable({
        id: row.id,
    })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition: transition,
    }

    return (
        <TableRow
            ref={setNodeRef}
            style={style}
            data-state={row.getIsSelected() && "selected"}
            className={`
                ${isDragging ? "bg-blue-50 opacity-80" : "hover:bg-gray-50"}
                transition-colors cursor-move
            `}
        >
            {row.getVisibleCells().map((cell) => (
                <TableCell
                    key={cell.id}
                    {...attributes}
                    {...listeners}
                    className="py-3"
                >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
            ))}
        </TableRow>
    )
}

export default DraggableRow