"use client"

import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { DataTable } from "@/components/Dashboard/DataTable"
import usersColumns from "@/components/Dashboard/users/usersColumns"
import { Loader2 } from "lucide-react"

const AllUsers = () => {
    const dataFilter = ["name", "email", "address", "role"]

    // Fetch users with TanStack Query
    const {
        data: users = [],
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["all-users"],
        queryFn: async () => {
            const res = await axios.get("https://zentro-server.vercel.app/api/v1/users")
            return res.data?.data || []
        },
    })

    if (isLoading) {
        return (
            <div className="flex justify-center items-center py-20">
                <Loader2 className="animate-spin size-6 text-muted-foreground" />
                <span className="ml-2 text-sm text-muted-foreground">Loading users...</span>
            </div>
        )
    }

    if (isError) {
        return (
            <div className="text-center text-red-500 py-10">
                Failed to load users: {error.message}
            </div>
        )
    }

    return (
        <div>
            <DataTable columns={usersColumns} data={users} dataFilter={dataFilter} />
        </div>
    )
}

export default AllUsers
