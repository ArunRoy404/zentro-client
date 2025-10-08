"use client"

import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { DataTable } from "@/components/Dashboard/DataTable"
import usersColumns from "@/components/Dashboard/users/usersColumns"
import AlertTable from "@/components/Alert/AlertTable"
import SkeletonTable from "@/components/Skeleton/SkeletonTable"



const AllUsers = () => {
    const dataFilter = ["name", "email", "address", "role"]
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
        return <SkeletonTable />
    }

    if (isError) {
        return <AlertTable message={error?.message} label={'User'} />
    }

    return (
        <div>
            <DataTable columns={usersColumns} data={users} dataFilter={dataFilter} />
        </div>
    )
}

export default AllUsers
