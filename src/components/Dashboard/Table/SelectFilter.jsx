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


const SelectFilter = ({ dataFilter, selectedFilter, handleFilterChange }) => {

    return (
        <Select
            value={selectedFilter}
            onValueChange={handleFilterChange}
        >
            <SelectTrigger className="rounded-none">
                <SelectValue placeholder="Change Role" />
            </SelectTrigger>
            <SelectContent className='rounded-none'>
                <SelectGroup>
                    <SelectLabel>Filter By</SelectLabel>
                    {
                        dataFilter.map(filterBy => <SelectItem key={filterBy} value={filterBy}>{filterBy}</SelectItem>)
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default SelectFilter;