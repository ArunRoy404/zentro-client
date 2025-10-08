"use client"

import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { DataTable } from "@/components/Dashboard/DataTable"
import usersColumns from "@/page/dashboard/users/usersColumns"
import AlertTable from "@/components/Alert/AlertTable"
import SkeletonTable from "@/components/Skeleton/SkeletonTable"
import HeadingDashboard from "@/components/Dashboard/HeadingDashboard"



const AllUsers = () => {
    const dataFilter = ["name", "email", "address", "role"]
    const {
        data: users = [],
        isFetching,
        isError,
        error,
        refetch
    } = useQuery({
        queryKey: ["all-users"],
        queryFn: async () => {
            const res = await axios.get("https://zentro-server.vercel.app/api/v1/users")
            return res.data?.data || []
        },
    })

    return (
        <div>
            <HeadingDashboard
                title="Users"
                refetch={refetch}
                data={users}
            />

            {
                isFetching
                    ? <SkeletonTable />
                    : isError
                        ? <AlertTable message={error?.message} label={'User'} />
                        : <DataTable columns={usersColumns} data={users} dataFilter={dataFilter} />

            }
        </div>
    )
}

export default AllUsers
