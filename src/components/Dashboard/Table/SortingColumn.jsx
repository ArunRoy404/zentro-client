import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"

const SortingColumn = ({ column, children }) => {
    return (
        <Button
            variant="ghost"
            className='!p-0'
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
            {children}
            <ArrowUpDown />
        </Button>
    )
}

export default SortingColumn